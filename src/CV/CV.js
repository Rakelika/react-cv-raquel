import imageProfile from "../assets/raquel-profile.png"
import pdfCurriculum from "../assets/cv-raquel.pdf"

export const CV = {
    hero: {
      name: "Raquel",
      adress: "Sánchez García",
      title:"Diseñadora | Desarrolladora Front End",
      image: imageProfile,
      pdf: pdfCurriculum,
      aboutMe: [
        {
          info: "Soy Raquel, diseñadora y desarrolladora web.",
        },
        {
          info: "Soy una apasiona de todo lo relativo con la cultura visual (cine, fotografía, diseño…).",
        },
        {
          info: "Desde hace más de siete años me dedico al mundo del diseño web. Me considero afortunada de poder dedicarme a lo que realmente me gusta. Intento seguir creciendo en el mundo del diseño y el desarrollo web cada día.",
        },
        {
          info: "Me considero una diseñadora versátil capaz de adaptarme a las necesidades de cada proyecto sin caer en un estilo determinado. Siempre estoy investigando, mirando, aprendiendo, evolucionando…",
        },
      ],
    },
    contact: {
      gitHub: "https://github.com/Rakelika",
      linkedin: "https://www.linkedin.com/in/raquel-sanchez-garcia/",
      email: "mailto:raquelsg.gp@gmail.com",
    },
    education:{
      main: [
        {
          name: "Front End Developer, Desarrollo de aplicaciones web",
          date: "09/2022 - 04/2023",
          where: "Upgrade Hub",
        },
        {
          name: "Técnico Superior Gráfica Publicitaria",
          date: "09/2012- 02/2015",
          where: "Escuela de Arte de Albacete",
        },
        {
          name: "Licenciatura Bellas Artes",
          date: "09/2004 - 06/2010",
          where: "Facultad de Bellas Artes de Cuenca",
        }
      ],
      others: [
        {
          title: "Curso 'UX:Usabilidad y Experiencia dde Usuario",
          more: "Impartido por Daniel Torres Burriel (Domestika)",
        },
        {
          title: "Curso 'Layout web con CSS Grid, Flexbox y otras técnicas modernas",
          more: "Impartido por Javier Usobiaga Ferrer (Domestika)",
        },
        {
          title: "Taller de copywriter de Maider Tomasena, 'Escribir para vender'",
          more: "Formación interna Dayvo Sistemas",
        },
        {
          title: "Primer premio en el Concurso Desafío Seur Emprende 2015",
          more: "Organizado por la empresa de logística Seur S.L.",
        },
        {
          title: "Taller de Ilustración para cuentos infantiles",
          more: "Organizado por la Fundación SM y el Cepli (2009)",
        },
        {
          title: "Beca Erasmus en L.A.B.A.",
          more: "Libera Accademia di Belle Arti di Brescia (2007-2008)",
        },
      ],
    },
    experience: [
      {
        name: "Diseñadora - maquetadora web",
        date: "11/2018 - Actualidad",
        where: "Sockdata Business S.L.",
        description:[
          {
            info: "Diseño y maquetación web en wordpress para empresas de todo tipo de sectores",
          },
          {
            info: "Diseño de landing pages para campañas de Google Adwords",
          },
          {
            info: "Diseño de newsletters",
          },
          {
            info: "Diseño de creatividades para redes sociales",
          },
        ],
      },
      {
        name: "Diseñadora - maquetadora web",
        date: "02/2016 - 09/2018",
        where: "Dayvo Sistemas S.L.U.",
        description: [
          {
            info: "Diseño y maquetación web en CMS para empresas de todo tipo de sectores",
          },
          {
            info: "Responsable diseño de la propia empresa",
          },
          {
            info: "Formadora CMS para nuevas incorporaciones",
          },
        ],        
      },
      {
        name: "Autónoma",
        date: "11/2015 - 02/2017",
        where: "Juguetes Lump",
        description:[
          {
            info: "Creadora de tienda online especializada en juguetes de papel y cartón",
          },
          {
            info: "Ganadora del primer premio a la mejor iniciativa ecommerce en el concurso Desafío Seur Emprende",
          },
        ],
      },
      {
        name: "Diseñadora gráfica",
        date: "10/2014 - 11/2014",
        where: "Dinarama",
        description:[
          {
            info: "Prácticas de empresa Técnico Superior ráfica Publicitaria",
          },
        ],
      },
    ],
    technologies: ["HTML5","CSS3","SASS","Bootstrap","JavaScript","TypeScript","Angular","React","Git", "GitHub", "Visual Studio Code", "Wordpress","Divi","Elementor", "Gutenberg", "Adobe Photoshop","Adobe Illustrator","Adobe InDesign"]
  };