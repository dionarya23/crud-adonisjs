'use strict'

const Maha = use('App/Models/Mahasiswa');

class HomeController {

  async index () {
    return 'Dummy response'
  }

  async kamving({view}){
    const maha = await Maha.all();

    return view.render('test', {data:maha.toJSON()});
  }

  async edit({request, view}){
    const req      = request.params.nim;
    const editData = await Maha.findBy('NIM', req);

     return view.render('add/edit', {status: 'edit', data:editData});
  }

  async editData({request, view, response}){

    const PostData = request.post(),
          nimNya   = PostData.nim,
          namaNya  = PostData.nama,
          param    = request.params.nim;

    await Maha
    .query()
    .where('NIM', param)
    .update({ Nama: namaNya, NIM:nimNya });

    return response.redirect('/data');
    
  }

  async hapus({ request, response }){
    await Maha
    .query()
    .where('NIM', request.params.nim)
    .delete()

    response.redirect('/data');

  }

  async add({request, response}){
    let nimInput  = request.input('nim'),
        namaInput = request.input('nama');

        const mahasiswa = new Maha();

        mahasiswa.NIM = nimInput;
        mahasiswa.Nama = namaInput;

        await mahasiswa.save();

        response.redirect('/data');
  }



}

module.exports = HomeController
