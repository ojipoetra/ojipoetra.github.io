document
  .getElementById("whatsapp")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = getElementById("nama");
    const pesan = getElementById("pesan");

    const nomorTujuan = "088223931865";

    const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(
      `Hallo ${nama}, ${pesan}`
    )}`;

    window.location.href = url;
  });
