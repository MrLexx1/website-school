import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from "./../component/assets/jurusan1.jpg";
import jurusan2 from "./../component/assets/jurusan2.jpg";
import jurusan3 from "./../component/assets/jurusan3.jpg";
import kegiatan1 from "./../component/assets/kegiatan1.jpg";
import kegiatan2 from "./../component/assets/kegiatan2.jpg";
import kegiatan3 from "./../component/assets/kegiatan3.jpg";
import kegiatan4 from "./../component/assets/kegiatan4.jpg";
import kegiatan5 from "./../component/assets/kegiatan5.jpg";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <div className="Container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Jurusan Sekolah</h1>
          </div>
        </div>
        <div className="row flex justify-content-center">
          <div className="col-lg-3 col-12">
            <Cardjurusan
              image={jurusan1}
              jurusan="FrontEnd Developer"
              deskripsi="Belajar tentang FrontEnd sampai mendapatkan Proyek"
              tombol="Ayo Belajar!!"
            />
          </div>
          <div className="col-lg-3 col-12">
            <Cardjurusan
              image={jurusan2}
              jurusan="Designer"
              deskripsi="banyak pembimbing pembingan di sini yang di import langsung dari luar negeri"
              tombol="Ayo Belajar!!"
            />
          </div>
          <div className="col-lg-3 col-12">
            <Cardjurusan
              image={jurusan3}
              jurusan="FullStack Developer"
              deskripsi="Full stack yang akan menyelesaikan proyek dan mengajari kepada siswa siswa baru development"
              tombol="Ayo Belajar!!"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Kegiatan</h1>
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan
              image={kegiatan1}
              deskripsi="saat jam istirahat para mahasiswa sibuk merefresh otak mereka dengan bermain bersama"
            />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan
              image={kegiatan2}
              deskripsi="ini kegiatan para siswa berkemah"
            />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan
              image={kegiatan3}
              deskripsi="para full stack sedang bermain bola bersama mahasiswa baru"
            />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan
              image={kegiatan4}
              deskripsi="kegiatan tugas kelompok"
            />
          </div>
          <div className="col-12 my-3">
            <Cardkegiatan
              image={kegiatan5}
              deskripsi="para designer sedang belajar membuat desain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
