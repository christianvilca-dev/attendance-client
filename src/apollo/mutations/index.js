import { gql } from '@apollo/client';

export const NUEVO_CLIENTE = gql`
mutation newClient($input: ClienteInput) {
  newClient(input: $input) {
    id
    nombre
    apellido
  }
}`;

export const ACTUALIZAR_CLIENTE = gql `
mutation updateClient($input: ClienteInput) {
  updateClient(input: $input) {
    id
    nombre
    apellido
    edad
    empresa
    tipo
    emails {
      email
    }
  }
}`

export const ELIMINAR_CLIENTE = gql `
mutation removeClient($id: ID!){
  removeClient(id: $id)
}`

export const NUEVO_PRODUCTO = gql`
mutation newProduct($input: ProductoInput) {
  newProduct(input: $input) {
    nombre
  }
}`

export const ELIMINAR_PRODUCTO = gql `
mutation eliminarProducto($id: ID!) {
  eliminarProducto(id: $id)
}`

export const ACTUALIZAR_PRODUCTO = gql `
mutation actualizarProducto($input: ProductoInput){
  actualizarProducto(input: $input){
    nombre
    precio
    stock
  }
}`

// Pedidos

export const NUEVO_PEDIDO = gql `
mutation newOrder($input: PedidoInput) {
  newOrder(input: $input) {
    id
  }
}`

export const ACTUALIZAR_ESTADO = gql `
mutation updateState($input: PedidoInput) {
  updateState(input: $input)
}`


// Usuarios
export const NUEVO_USUARIO = gql `
mutation newUser($usuario: String!, $nombre: String!, $password: String!, $rol: String! ) {
  newUser(usuario: $usuario, nombre: $nombre, password: $password, rol: $rol)
}`


export const AUTENTICAR_USUARIO = gql `
mutation validateUser($usuario: String!, $password: String! ) {
  validateUser(usuario: $usuario, password: $password){
    token
  }
}`
