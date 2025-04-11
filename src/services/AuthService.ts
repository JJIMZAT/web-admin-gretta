import api from '@/lib/axios'
import { jwtDecode } from 'jwt-decode'

interface LoginPayload {
  usuario: string
  password: string
}

interface TokenDecoded {
  sub: string
  name: string
  role: string
  exp: number
  [key: string]: any
}

export interface LoginResponse {
  token: string
  refreshToken: string
  decoded: TokenDecoded
  usuarioId: number
  correo: string
  nombre: string
  rolId: number
}

class AuthService {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    try {
      const res = await api.post('/User/Login', payload)

      const { data, success, message } = res.data

      if (!success || !data?.token) {
        throw new Error(message || 'Credenciales inválidas')
      }

      const decoded: TokenDecoded = jwtDecode(data.token)

      return {
        token: data.token,
        refreshToken: data.refreshToken,
        usuarioId: data.usuarioId,
        correo: data.correo,
        nombre: data.nombre,
        rolId: data.rolId,
        decoded,
      }
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || error?.message || 'Error inesperado al iniciar sesión'
      )
    }
  }
}

export default new AuthService()
