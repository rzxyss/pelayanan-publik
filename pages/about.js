import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BiArrowToTop } from "react-icons/bi";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Profile() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-auto">
      <Navbar />
      {showButton && (
        <button
          className={`fixed w-14 h-14 bg-indigo-500 text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <BiArrowToTop className="w-6 h-6 text-white" />
        </button>
      )}
      <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80'>
        <div className="bg-black/60 w-full h-full">
          <div className="flex flex-col p-10">
            <h1 className="font-Poppins font-extrabold text-2xl lg:text-3xl xl:text-5xl text-white">
              Tentang TIKomDik
            </h1>
            <h1 className="font-Poppins font-light text-xl text-white">
              Ketahui segalanya tentang UPTD TIKOMDIK.
            </h1>
          </div>
          <div className="w-full h-auto lg:mt-14 px-5 lg:px-20 2xl:px-60">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg my-10">
              <div id="tentang-tikomdik" className="my-10">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  UPTD TIKomDik
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-16 py-10">
                  <div className="lg:w-10/12 lg:mx-auto">
                    <Image
                      src={"/image/TulisanTikomdik.jpg"}
                      responsive="true"
                      alt="Hero Image"
                      width={350}
                      height={0}
                      className="rounded-xl float-none lg:mb-5 lg:mr-5 mx-auto lg:float-left"
                    />
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
                      Disrupsi Teknologi 4.0 mempengaruhi dunia pendidikan
                      secara eksponensial. Di sisi lain peserta didik saat ini
                      adalah Generasi Neo Milenial atau dikenal juga sebagai
                      Generasi Z. Peserta didik saat ini memiliki kebiasaan
                      highly mobile, apps-dependent, visually-literate, dan
                      always connected (selalu terhubung online). Mereka sudah
                      terbiasa berkomunikasi antar sesamanya di jaringan
                      internet diantaranya melalui media sosial. Mereka terbiasa
                      belajar dan mengakses informasi melalui kanal-kanal yang
                      tersedia secara online.
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
                      Sehingga mereka menjadi data-literate (melek data). Mereka
                      sangat paham dan piawai berselancar di mesin-mesin pencari
                      online, mendapatkan, memahami, memproses, mengurasi, dan
                      menganalisis informasi. Mereka memenuhi kebutuhan
                      informasinya tidak lagi secara pasif seperti di
                      perpustakaan konvensional. Disrupsi Teknologi 4.0
                      mendorong dunia pendidikan tidak lagi bergerak dengan
                      model bisnis konvensional (Bussiness as Usual) tetapi
                      bertransformasi dan menyesuaikan diri dengan kebutuhan
                      peserta didiknya.
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
                      Dunia Pendidikan harus mampu mendorong pembelajaran secara
                      kolaboratif dengan pendekatan peer-to-peer diantaranya
                      dengan memanfaatkan social learning platform. Dunia
                      Pendidikan dituntut untuk membentuk peserta didik
                      menguasai soft skills (Seven Survival Skills for 21st
                      Century- Tony Wagner, 2008) meliputi : critical thinking
                      and problem solving, collaboration across network, agility
                      and adaptability, Initiative and entrepreneurship,
                      Accessing and analysing information, effective
                      communication, curiosity and imagination. Pemerintah
                      Provinsi Jawa Barat merespon kebutuhan dan kondisi
                      tersebut dengan membuat UPTD Teknologi Informasi dan
                      Komunikasi Pendidikan (UPTD Tikomdik) di bawah Dinas
                      Pendidikan Provinsi Jawa Barat. Core Bussiness UPTD
                      Tikomdik adalah memfasilitasi konten pembelajaran meliputi
                      bahan ajar dan penilian (Bank Soal). Tugas lainnya adalah
                      memfasilitasi kebutuhan TIK di lingkungan Dinas Pendidikan
                      Provinsi Jawa Barat.
                    </h1>
                  </div>
                </div>
              </div>
              <div id="visi-misi" className="my-10 px-7 lg:px-20 2xl:px-56">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Visi dan Misi
                </h1>
                <div className="grid lg:grid-cols-3 gap-2 py-5 lg:py-0 lg:items-center">
                  <div className="col-span-2">
                    <div className="flex flex-col space-y-3">
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lato font-extrabold text-3xl text-[#112883]">
                          Visi
                        </h1>
                        <h1 className="font-Poppins font-medium text-lg text-black/50">
                          Menuju Lembaga kreatif inovatif dalam memberikan
                          layanan pembelajaran, Pendidikan, dan system tata
                          kelola Pendidikan di era milenial.
                        </h1>
                      </div>
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lato font-extrabold text-3xl text-[#112883]">
                          Misi
                        </h1>
                        <ul className="list-disc list-outside text-black/50">
                          <li className="font-Poppins font-medium text-lg">
                            Mempersiapkan Sumber Daya Manusia yang literat
                            terhadap Teknologi Informasi.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Membangun Kultur Pemanfaatan TIK Pendidikan di
                            Lingkungan Satuan Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Menghasilkan Produk TIK yang berkualitas bagi
                            Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Memberikan pelayanan profesional dengan menggunakan
                            teknologi informasi dan komunikasi di berbagai
                            sektor Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Mewujudkan Layanan Pendidikan Terintegrasi berbasis
                            TIK di Jawa Barat.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Menjadi pusat pembangunan dan pengembangan TIK
                            Pendidikan.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-2">
                    <div className="col-start-1 row-start-1 flex justify-end p-2">
                      <Image
                        src={"/image/visi-misi1.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-2 row-start-2 flex justify-start p-2">
                      <Image
                        src={"/image/visi-misi2.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-1 row-start-3 flex justify-end p-2">
                      <Image
                        src={"/image/visi-misi3.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tugas-pokok-dan-fungsi"
                className="my-10 px-7 lg:px-20 2xl:px-56"
              >
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Tugas Pokok Dan Fungsi
                </h1>
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-Lato font-extrabold text-3xl text-[#112883]">
                      Tugas Pokok
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50">
                      UPTD Teknologi Informasi dan Komunikasi Pendidikan
                      mempunyai tugas pokok melaksanakan kegiatan teknis
                      operasional dan/atau kegiatan teknis penunjang tertentu
                      dibidang teknologi informasi dan komunikasi pendidikan,
                      meliputi pengembangan dan produksi serta pelayanan dan
                      promosi.
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-Lato font-extrabold text-3xl text-[#112883]">
                      Fungsi
                    </h1>
                    <ul className="list-disc list-outside text-black/50">
                      <li className="font-Poppins font-medium text-lg">
                        Penyiapan bahan kebijaksanaan teknis di bidang teknologi
                        informasi dan komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Penyusunan program pengembangan teknologi informasi dan
                        komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Penyusunan program tentang pemanfaatan Teknlogi
                        Informasi dan Komunikasi Pendidikan untuk satuan Sekolah
                        Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK) dan
                        Pendidikan Khusus dan Pendidikan Layanan Khusus (PKPLK).
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pemberian pelayanan teknologi informasi dan komunikasi
                        dalam bidang pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengelolaan e-layanan bidang pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pelaksanaan kerjasama pemanfaatan teknologi informasi
                        dan komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengembangan kompetensi pendidik di bidang pemanfaatan
                        teknologi informasi dan komunikasi untuk pembelajaran.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengembangan kompetensi tenaga kependidikan dibidang
                        pemanfaatan teknologi informasi dan komunikasi
                        pendidikan.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10" id="team-project">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Team Project
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 pb-8 px-5">
                  <div className="bg-gray-300 p-6 rounded-lg">
                    <Image
                      src={"/image/Fajar.jpeg"}
                      alt="Fajar Muhammad"
                      width={500}
                      height={500}
                      className="w-40 h-40 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">
                      Fajar Muhammad
                    </h3>
                    <p className="text-gray-600 text-center md:text-left">
                      UI/UX Design
                    </p>
                  </div>
                  <div className="bg-gray-300 p-6 rounded-lg">
                    <Image
                      src={"/image/Izza.jpeg"}
                      alt="Izza Zaki Z"
                      width={500}
                      height={500}
                      className="w-40 h-40 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">
                      Izza Zaki Zarkasyi
                    </h3>
                    <p className="text-gray-600 text-center md:text-left">
                      Backend
                    </p>
                  </div>
                  <div className="bg-gray-300 p-6 rounded-lg">
                    <Image
                      src={"/image/Ilham.jpg"}
                      alt="M Ilham Hardiana"
                      width={500}
                      height={500}
                      className="w-40 h-40 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">
                      M Ilham Hardiana
                    </h3>
                    <p className="text-gray-600 text-center md:text-left">
                      Frontend (Admin Page)
                    </p>
                  </div>
                  <div className="bg-gray-300 p-6 rounded-lg">
                    <Image
                      src={"/image/Rizki.jpg"}
                      alt="Rizki Saepul Aziz"
                      width={500}
                      height={500}
                      className="w-40 h-40 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2 text-center md:text-left">
                      Rizki Saepul Aziz
                    </h3>
                    <p className="text-gray-600 text-center md:text-left">
                      Frontend (Landing Page)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}