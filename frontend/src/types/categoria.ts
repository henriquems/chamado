import { Subcategoria } from 'types/subcategoria';

export type Categoria = {
    codigo: number;
    descricao: string;
    subcategorias : Subcategoria[];
}