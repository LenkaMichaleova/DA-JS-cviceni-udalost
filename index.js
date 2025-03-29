const udalost = dayjs("19-06-2025")
const dnes = dayjs()

document.body.innerHTML += "<h1>Už jsou z nás absolventky?</h1>"

if (dnes.isAfter(udalost)) {
    document.body.innerHTML += '<h3>ANO!!Ještě ne</h3>';
  } else {
    document.body.innerHTML += '<h3>Ještě ne</h3>';
  }