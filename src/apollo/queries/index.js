import gql from 'graphql-tag';

export const CLIENTES_QUERY = gql`
	query getAllClient($limite: Int, $offset: Int, $vendedor: String) {
		getAllClient(limite: $limite, offset: $offset, vendedor: $vendedor) {
			id
			nombre
			apellido
			empresa
		}
		totalClient(vendedor: $vendedor)
	}
`;

export const CLIENTE_QUERY = gql`
	query ConsultarCliente($id: ID) {
		getCliente(id: $id) {
			id
			nombre
			apellido
			empresa
			edad
			tipo
			emails {
				email
			}
		}
	}
`;

// Productos

export const OBTENER_PRODUCTOS = gql`
	query getAllProduct($limite: Int, $offset: Int, $stock: Boolean) {
		getAllProduct(limite: $limite, offset: $offset, stock: $stock) {
			id
			nombre
			precio
			stock
		}
		totalProduct
	}
`;

export const OBTENER_PRODUCTO = gql`
	query getProduct($id: ID!) {
		getProduct(id: $id) {
			id
			nombre
			precio
			stock
		}
	}
`;

// Pedidos
export const OBTENER_PEDIDOS = gql`
	query getOrder($cliente: ID) {
		getOrder(cliente: $cliente) {
			id
			total
			fecha
			estado
			pedido {
				id
				cantidad
			}
		}
	}
`;


// Graficas
export const TOP_CLIENTES = gql`
	query topClient {
    topClient{
      total
      cliente {
        nombre
      }
    }
  }
`;

export const TOP_VENDEDORES = gql`
	query topSeller{
    topSeller {
      total
      vendedor {
        nombre
      }
    }
  }
`;

// Usuarios
export const USUARIO_ACTUAL = gql`
	query getUser {
    getUser{
      id
      usuario
      nombre
      rol
    }
  }
`;

