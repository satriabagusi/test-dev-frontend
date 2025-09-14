import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import Swal from "sweetalert2";
import { animals } from "./utils/animals.js";
import { numbers } from "./utils/numbers.js";

import caseDataJson from "./assets/json/case.json";
import expectationData from "./assets/json/expectation.json";

function App() {
  const [listAnimals, setListAnimals] = useState([...animals]);

  // Soal No. 2
  // Buat fungsi untuk menambah hewan peliharaan baru Esa, yaitu seekor badak Jawa dengan nama Rino yang pekerja keras. yang juga menjadi kesayangan esa
  // Jawaban Soal No. 2
  const addRino = () => {
    Swal.fire({
      title: "Tambah Rino",
      html: `<p>Ingin menambahkan <strong>Rino</strong> ke daftar hewan? <br></p>
      <ul style="text-align: left;list-style-type: none;">
        <li>Nama: Rino</li>
        <li>Jenis: Badak</li>
        <li>Ras: Badak Jawa</li>
        <li>Karakteristik: Pekerja Keras</li>
        <li>Kesayangan: Ya</li>
        </ul>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Ya, Tambahkan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setListAnimals([
          ...listAnimals,
          {
            nama: "Rino",
            jenis: "Badak",
            ras: "Badak Jawa",
            karakteristik: ["Pekerja Keras"],
            kesayangan: true,
          },
        ]);
        Swal.fire("Ditambahkan!", "Rino telah ditambahkan.", "success");
      }
    });
  };
  // Akhir Jawaban No. 2

  // Soal No. 3
  // Buat fungsi untuk mengambil hewan kesayangan Esa secara descending dan ascending
  // Jawaban Soal No. 3
  const urutkanPalingkanKesayangan = () => {
    let sorted = [...listAnimals].sort((a, b) => {
      return b.kesayangan - a.kesayangan;
    });
    setListAnimals(sorted);
  };

  const urutkanBukanKesayangan = () => {
    let sorted = [...listAnimals].sort((a, b) => {
      return a.kesayangan - b.kesayangan;
    });
    setListAnimals(sorted);
  };
  // Akhir Jawaban No. 3

  // Soal No. 4
  // Buat fungsi untuk mengganti kucing Persia menjadi kucing Maine Coon
  // Jawaban Soal No. 4
  const replacePersiaToMaineCoon = () => {
    Swal.fire({
      title: "Ganti Persia ke Maine Coon",
      html: `<p>Yakin ganti Ras Kucing 
            <strong>Persia</strong> 
            menjadi Ras Kucing 
            <strong>Maine Coon</strong> ?</p>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Ya, Ganti",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        let updated = listAnimals.map((a) => {
          if (a.ras.toLowerCase() === "persia") {
            return { ...a, ras: "Maine Coon" };
          }
          return a;
        });
        setListAnimals(updated);
        Swal.fire("Berhasil!", "Ras Kucing Persia telah diganti.", "success");
      }
    });
  };
  // Akhir Jawaban No. 4

  // Soal No. 5
  // Buat fungsi untuk menghitung jumlah hewan peliharan esa sesuai dengan jenisnya
  // Jawaban Soal No. 5
  const calculateAnimalsByJenis = () => {
    Swal.fire({
      title: "Hitung jumlah hewan per jenis",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Ya, Hitung",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        let data = [];
        listAnimals.forEach((a) => {
          if (data[a.jenis]) {
            data[a.jenis] += 1;
          } else {
            data[a.jenis] = 1;
          }
        });
        Swal.fire({
          title: "Jumlah hewan per jenis",
          icon: "info",
          html: `<ul style="text-align: left;list-style-type: none;">
                  ${Object.keys(data)
                    .map((key) => `<li>${key}: ${data[key]}</li>`)
                    .join("")}
                </ul>`,
        });
      }
    });
  };
  // Akhir Jawaban No. 5

  // Soal No. 6
  // Buat fungsi untuk mengecek hewan peliharaan esa yang mengandung kata palindrome beserta panjang string dari namanya
  // Jawaban Soal No. 6
  const checkPalindromeAndLengthBasedOnName = () => {
    let data = listAnimals.map((a) => {
      let isPalindrome =
        a.nama.toLowerCase() ===
        a.nama.toLowerCase().split("").reverse().join("");
      return {
        ...a,
        isPalindrome,
        nameLength: a.nama.length,
      };
    });
    Swal.fire({
      title: "Cek Palindrome dan Panjang Nama",
      icon: "info",
      html: `<ul style="text-align: left;list-style-type: none;">
              ${data
                .map(
                  (a) =>
                    `<li>${a.nama}: Palindrome - ${
                      a.isPalindrome ? "Ya" : "Tidak"
                    }, Panjang Nama - ${a.nameLength}</li>`
                )
                .join("")}
            </ul>`,
    });
  };
  // Akhir Jawaban Soal No. 6

  // Soal No. 7
  // Buat fungsi untuk menjumlah bilangan genap dari array berikut [15,18,3,9,6,2,12,14] dan munculkan bilangan genap nya
  // Jawaban Soal No. 7
  const summarizeEvenNumbersFromArray = () => {
    let evenNumbers = numbers.filter((num) => num % 2 === 0);
    let sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    Swal.fire({
      title: "Jumlahkan Angka Genap dari Array",
      icon: "info",
      html: `<p>Angka Genap: [${evenNumbers.join(
        ", "
      )}] <br> Jumlah: <strong>${sum}</strong></p>`,
    });
  };
  // Akhir Jawaban Soal No. 7

  // Soal No. 8
  // Buat fungsi dengan paramater yang di inisiasi sendiri untuk menentukan apakah dua string adalah anagram (memiliki huruf yang sama dengan jumlah yang sama, tetapi urutan berbeda).
  // Jawaban Soal No. 8
  const areAnagrams = () => {
    Swal.fire({
      title: "Cek Anagram",
      html: `<p>Masukan kata pertama: 
              <input type="text" id="anagram1"> 
              <br>Masukan kata kedua: 
              <input type="text" id="anagram2">
              </p>`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Cek",
      cancelButtonText: "Batal",
      preConfirm: () => {
        const anagram1 = Swal.getPopup().querySelector("#anagram1").value;
        const anagram2 = Swal.getPopup().querySelector("#anagram2").value;
        if (!anagram1 || !anagram2) {
          Swal.showValidationMessage(`Kedua kata harus diisi`);
        }
        return { anagram1, anagram2 };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { anagram1, anagram2 } = result.value;
        const formatString = (str) =>
          str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "")
            .split("")
            .sort()
            .join("");
        const isAnagram = formatString(anagram1) === formatString(anagram2);
        Swal.fire(
          "Hasil Cek Anagram",
          isAnagram
            ? `"${anagram1}" dan "${anagram2}" adalah anagram.`
            : `"${anagram1}" dan "${anagram2}" bukan anagram.`,
          isAnagram ? "success" : "error"
        );
      }
    });
  };
  // Akhir Jawaban Soal No. 8

  // Soal No.9
  // Buatkan fungsi yang memformat json (assets/json/case.json) menjadi seperti (assets/json/expectation.json)
  // Jawaban Soal No.9
  const [isCaseDataFormatted, setIsCaseDataFormatted] = useState(false);
  const [caseData, setCaseData] = useState(caseDataJson);
  const formatJsonCaseData = () => {
    if (!isCaseDataFormatted) {
      let result = {
        total: 0,
        data: [],
      };

      const categoryMap = {};

      caseData.data.forEach((item) => {
        if (!categoryMap[item.category]) {
          categoryMap[item.category] = {
            category: item.category,
            total: 0,
            data: {},
          };
        }

        const category = categoryMap[item.category];

        // Group by code
        if (!category.data[item.code]) {
          category.data[item.code] = {
            total: 0,
            data: [],
          };
        }

        const codeGroup = category.data[item.code];

        codeGroup.data.push({
          name: item.name,
          total: item.total,
        });

        // sum total per code
        codeGroup.total += item.total;

        // sum total per category
        category.total += item.total;

        // sum total
        result.total += item.total;
      });

      result.data = Object.values(categoryMap);

      setCaseData(result);
      setIsCaseDataFormatted(true);
    }
  };
  // Akhir Jawaban Soal No.9

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4 px-3">
        <Navbar.Brand>List Hewan Esa</Navbar.Brand>
      </Navbar>

      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Total Hewan</Card.Title>
                <h2>
                  <Badge bg="primary">{listAnimals.length}</Badge>
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Row className="mb-3">
              <h4>List Fungsi</h4>
              <Col>
                <Button
                  onClick={addRino}
                  variant="success"
                  className="ms-2 btn-sm"
                >
                  Tambah Rino
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={urutkanPalingkanKesayangan}
                  variant="info"
                  className="ms-2 btn-sm"
                >
                  Urutkan kesayangan
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={urutkanBukanKesayangan}
                  variant="warning"
                  className="ms-2 btn-sm"
                >
                  Urutkan bukan kesayangan
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={replacePersiaToMaineCoon}
                  variant="secondary"
                  className="ms-2 btn-sm"
                >
                  Ganti Persia ke Maine Coon
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={calculateAnimalsByJenis}
                  variant="dark"
                  className="ms-2 btn-sm"
                >
                  Hitung hewan per jenis
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={checkPalindromeAndLengthBasedOnName}
                  variant="primary"
                  className="ms-2 btn-sm"
                >
                  Cek Palindrome & Panjang Nama
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  onClick={summarizeEvenNumbersFromArray}
                  variant="outline-primary"
                  className="ms-2 btn-sm"
                >
                  Jumlahkan Angka Genap
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={areAnagrams}
                  variant="outline-secondary"
                  className="ms-2 btn-sm"
                >
                  Cek Anagram
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Data Table */}
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Header>
                <strong>Daftar Hewan Peliharaan Esa</strong>
              </Card.Header>
              <Card.Body>
                <Table hover responsive>
                  <thead className="table-dark">
                    <tr>
                      <th>Nama</th>
                      <th>Jenis</th>
                      <th>Ras</th>
                      <th>Karakteristik</th>
                      <th>Kesayangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listAnimals.map((a, i) => (
                      <tr key={i}>
                        <td>{a.nama}</td>
                        <td>{a.jenis}</td>
                        <td>{a.ras}</td>
                        <td>
                          {a.karakteristik.reduce(
                            (acc, curr) => acc + ", " + curr
                          )}
                        </td>
                        <td>
                          {a.kesayangan ? <Badge bg="success">Ya</Badge> : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <h2>Format JSON</h2>
        <Row>
          <Col>
            <Card className="shadow-sm">
              <Card.Body className="text-start">
                <p>
                  Data{" "}
                  <strong>{isCaseDataFormatted ? "Sudah" : "Belum"}</strong> di
                  Format
                </p>
                <Button
                  onClick={formatJsonCaseData}
                  variant="primary"
                  className="ms-2 btn-sm"
                >
                  Format
                </Button>
                <pre>{JSON.stringify(caseData, null, 2)}</pre>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="shadow-sm">
              <Card.Body className="text-start">
                <p>Data yang diharapkan</p>
                <pre>{JSON.stringify(expectationData, null, 2)}</pre>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
