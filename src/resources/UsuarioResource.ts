export default class UsuarioResource {
  private usuario: any;


  constructor(usuario: any) {
    this.usuario = usuario;
  }


  item() {
    return {
      id: this.usuario._id,


      nombre: this.usuario.nombre,
      apellido_paterno: this.usuario.apellido_paterno,
      apellido_materno: this.usuario.apellido_materno,


      carnet_identidad: this.usuario.carnet_identidad,


      rol: this.usuario.rol,


      createdAt: this.usuario.createdAt,
      updatedAt: this.usuario.updatedAt,
    };
  }
}
