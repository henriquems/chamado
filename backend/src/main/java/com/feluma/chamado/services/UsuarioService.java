package com.feluma.chamado.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.feluma.chamado.dto.PermissaoDTO;
import com.feluma.chamado.dto.UserInsertDTO;
import com.feluma.chamado.dto.UserUpdateDTO;
import com.feluma.chamado.dto.UsuarioDTO;
import com.feluma.chamado.entities.Permissao;
import com.feluma.chamado.entities.Usuario;
import com.feluma.chamado.repositories.PermissaoRepository;
import com.feluma.chamado.repositories.UsuarioRepository;
import com.feluma.chamado.services.exception.DatabaseException;
import com.feluma.chamado.services.exception.ResourceNotFoundException;

@Service
public class UsuarioService implements UserDetailsService {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PermissaoRepository permissaoRepository;
	
	private static Logger logger = LoggerFactory.getLogger(UsuarioService.class);
	
	@Transactional(readOnly = true)
	public Page<UsuarioDTO> listar(Pageable pageable) {
		Page<Usuario> list = usuarioRepository.findAll(pageable);
		return list.map(x -> new UsuarioDTO(x));
	}
	
	@Transactional(readOnly = true)
	public UsuarioDTO findById(Long codigo) {
		Optional<Usuario> obj = usuarioRepository.findById(codigo);
		Usuario usuario = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new UsuarioDTO(usuario);
	}

	@Transactional
	public UsuarioDTO insert(UserInsertDTO dto) {
		Usuario usuario = new Usuario();
		copyDtoToEntity(dto, usuario);
		usuario.setSenha(passwordEncoder.encode(dto.getSenha()));
		usuario = usuarioRepository.save(usuario);
		return new UsuarioDTO(usuario);
	}

	@Transactional
	public UsuarioDTO update(Long codigo, UserUpdateDTO dto) {
		try {
			Usuario usuario = usuarioRepository.getOne(codigo);
			copyDtoToEntity(dto, usuario);
			usuario = usuarioRepository.save(usuario);
			return new UsuarioDTO(usuario);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}		
	}

	public void delete(Long codigo) {
		try {
			usuarioRepository.deleteById(codigo);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Violação de integridade");
		}
	}
	
	private void copyDtoToEntity(UsuarioDTO dto, Usuario usuario) {
		
		usuario.setNome(dto.getNome());
		usuario.setEmail(dto.getEmail());
		usuario.setStatus(dto.getStatus());
		
		usuario. getPermissoes().clear();
		for (PermissaoDTO permissaoDto : dto.getPermissoes()) {
			Permissao permissao = permissaoRepository.getOne(permissaoDto.getCodigo());
			usuario.getPermissoes().add(permissao);
		}
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = usuarioRepository.findByEmail(username);
		if (usuario == null) {
			logger.error("User not found: " + username);
			throw new UsernameNotFoundException("Email not found");
		}
		logger.info("User found: " + username);
		return usuario;
	}
}
