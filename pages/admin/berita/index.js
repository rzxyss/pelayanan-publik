import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdHistory, MdEdit } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";
import { HiChevronDown } from "react-icons/hi";

export default function Berita() {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [profile, setProfile] = useState(false);
  useEffect(() => {
    const getAdmin = async (e) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/token`,
          {
            token: sessionStorage.getItem("token") || "null",
          }
        );
        setDataAdmin(res.data);
        if (sessionStorage.getItem("token", res.data[0].token)) {
          console.log("admin login");
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Anda Harus Login Terlebih Dahulu!",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          Router.push("/admin/login");
        }, 2100);
      }
    };
    getAdmin();
  }, []);

  function logoutHandle() {
    sessionStorage.clear();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Anda Telah Berhasil Logout",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      Router.push("/admin/login");
    }, 2100);
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-BebasNeue text-3xl text-[#112883] font-medium">
            berita
          </h1>
          <div className={`${!profile ? "hidden" : "absolute top-16 right-2"}`}>
            <div className="flex flex-col w-auto items-center bg-white border rounded-md p-2">
              <button onClick={logoutHandle}>Log Out</button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col items-end">
              {dataAdmin.map((admin, index) => {
                return (
                  <>
                    <h1 className="font-Poppins text-sm font-bold" key={index}>
                      {admin.name}
                    </h1>
                    <h1 className="font-Poppins text-sm font-bold text-black/50">
                      {admin.username}
                    </h1>
                  </>
                );
              })}
            </div>
            <Image
              src={"/image/pp.png"}
              width={50}
              height={0}
              className="rounded-full"
            />
            <HiChevronDown
              className="w-7 h-7 cursor-pointer"
              onClick={() => setProfile(!profile)}
            />
          </div>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="p-5">
            <div className="w-full h-auto flex flex-col">
              <div className="flex flex-row justify-between items-center">
                <Link
                  href={"berita/tambah-berita"}
                  className="flex flex-row items-start gap-1 border-2 border-[#112883] p-3 rounded-lg text-[#112883]"
                >
                  <h1 className="font-BebasNeue text-2xl font-medium">
                    Tambah Berita
                  </h1>
                  <AiOutlinePlus className="w-7 h-7" />
                </Link>
                <form className="lg:w-2/12">
                  <div class="relative">
                    <input
                      type="search"
                      class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black focus:outline-none"
                      placeholder="Cari ..."
                    />
                    <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-[#112883] hover:bg-[#112883]/90 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      <BiSearch className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5">
                <div className="w-auto">
                  <div className="grid lg:grid-cols-3 gap-5">
                    <div className="hover:scale-105 hover:bg-black/10 p-3 rounded-lg duration-500">
                      <Image
                        src={"/image/berita.jpg"}
                        width={100}
                        height={80}
                        layout="responsive"
                        alt="Berita"
                        className="rounded-lg"
                      />
                      <div className="px-3 py-2 flex-wrap">
                        <h1 className="font-Poppins font-medium text-lg">
                          Judul Berita
                        </h1>
                        <h1 className="font-Poppins font-light text-sm">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center text-black/60 mt-2">
                          <MdHistory className="w-5 h-5" />
                          <h1 className="font-Poppins font-light text-sm">
                            Berapa Hari Yang Lalu?
                          </h1>
                        </div>
                        <div className="flex flex-row items-center text-[#112883]">
                          <MdEdit className="w-5 h-5" />
                          <AiFillDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="hover:scale-105 hover:bg-black/10 p-3 rounded-lg duration-500">
                      <Image
                        src={"/image/berita.jpg"}
                        width={100}
                        height={80}
                        layout="responsive"
                        alt="Berita"
                        className="rounded-lg"
                      />
                      <div className="px-3 py-2 flex-wrap">
                        <h1 className="font-Poppins font-medium text-lg">
                          Judul Berita
                        </h1>
                        <h1 className="font-Poppins font-light text-sm">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center text-black/60 mt-2">
                          <MdHistory className="w-5 h-5" />
                          <h1 className="font-Poppins font-light text-sm">
                            Berapa Hari Yang Lalu?
                          </h1>
                        </div>
                        <div className="flex flex-row items-center text-[#112883]">
                          <MdEdit className="w-5 h-5" />
                          <AiFillDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    <div className="hover:scale-105 hover:bg-black/10 p-3 rounded-lg duration-500">
                      <Image
                        src={"/image/berita.jpg"}
                        width={100}
                        height={80}
                        layout="responsive"
                        alt="Berita"
                        className="rounded-lg"
                      />
                      <div className="px-3 py-2 flex-wrap">
                        <h1 className="font-Poppins font-medium text-lg">
                          Judul Berita
                        </h1>
                        <h1 className="font-Poppins font-light text-sm">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </h1>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row items-center text-black/60 mt-2">
                          <MdHistory className="w-5 h-5" />
                          <h1 className="font-Poppins font-light text-sm">
                            Berapa Hari Yang Lalu?
                          </h1>
                        </div>
                        <div className="flex flex-row items-center text-[#112883]">
                          <MdEdit className="w-5 h-5" />
                          <AiFillDelete className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
