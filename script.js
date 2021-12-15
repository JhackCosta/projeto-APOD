const btn = $('#btn')
let diaFoto = $('#diaFoto')

let textoFoto = $('#textoImagem')
let tituloFoto = $('#tituloFoto')
let video = $('#video')

imagemDiaAtual()
btn.on("click", () => {
    apod()
})

function imagemDiaAtual() {

    $.ajax({

        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?api_key=zPJeEyRKhKGQJgEQQCP4tN6apd5v0F3rywO0Zp0I`,

        success: function(req) {

            tituloFoto.html(req.title)
            diaFoto.prop('max', req.date)
            diaFoto.prop('value', req.date)
            textoFoto.html(req.explanation)

            if (req.media_type == "image") {

                diaFoto.css("background-image", `url(${req.hdurl})`)
                document.getElementById("diaFoto").style.display = "flex"
                document.getElementById('video').style.display = 'none'

            } else {
                video.attr('src', req.url)
                document.getElementById('diaFoto').style.display = "none"
                document.getElementById('video').style.display = 'flex'
            }
        }
    })
}

function apod() {

    return $.ajax({

        method: "GET",
        url: `https://api.nasa.gov/planetary/apod?api_key=zPJeEyRKhKGQJgEQQCP4tN6apd5v0F3rywO0Zp0I&date=${data.value}`,

        success: function(req) {

            tituloFoto.html(req.title)
            textoFoto.html(req.explanation)

            if (req.media_type == "image") {

                diaFoto.css("background-image", `url(${req.hdurl})`)
                document.getElementById("diaFoto").style.display = "flex"
                document.getElementById('video').style.display = 'none'

            } else {

                video.attr("src", `${req.url}`)
                document.getElementById('diaFoto').style.display = "none"
                document.getElementById('video').style.display = 'flex'
            }

        }
    })
}