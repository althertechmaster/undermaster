import { async } from "@firebase/util";
import { 
configureStore,
createAsyncThunk,
createSlice, 
} from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
};

export const getGenres = createAsyncThunk("netflix/genres", async() => {
    const { data: { genres } } = await axios.get(
        `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
        );

        return genres
});


const createArrayFromRawData = (array, moviesArray, genres) => {
    console.log(array);
    array.forEach((movie) => {
      const movieGenres = [];
      movie.genre_ids.forEach((genre) => {
        const name = genres.find(({ id }) => id === genre);
        if (name) movieGenres.push(name.name);
      });
      if (movie.backdrop_path)
        moviesArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
        });
    });
  };
  

var objM = [


  {id: 6160375, desc: 'Robin Hood é um filme mudo de aventura de 1922 estrelado por Douglas Fairbanks e Wallace Beery. Foi o primeiro filme a ter uma estreia em Hollywood, realizada no Graumans Egyptian Theatre em 18 de outubro de 1922.', cat: 'Novo', name: 'Robin Hood (1922)', image: '/5qYwVtsf2IMmSAzLfjTGB20vPiz.jpg', filme: 'Hobbin%20hood.mp4?alt=media&token=ec329f58-abfd-4dd3-8576-abf7552e488a', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/robinhoodTrailer.mp4?alt=media&token=1b0b9675-45a1-4b53-9acb-d16b5efa6826', genres: Array(1)},
  {id: 6160376, desc: 'A crise econômica levou Godfrey a viver embaixo da ponte. Mas ao ser convidado para se tornar mordomo de uma família rica, sua sorte muda. Na mansão, ele conhece a bela Irene e aos poucos vai conquistando a confiança de todos.', cat: 'Novo', name: 'Irene, a Teimosa (1936)', image: '/xCIYcIdsC3vGqLNtR9w97vPxWnT.jpg', filme: 'Irene%2C%20a%20Teimosa%20(My%20Man%20Godfrey)%20-%201936.mp4?alt=media&token=3b3bd6a9-87da-44e2-9939-172ffc1245fb', genres: Array(1)},
  {id: 6160378, desc: 'Esther Blodgett é mais uma garota que sonham em virar estrela de cinema. O sonho torna-se realidade quando atrai a atenção do astro Norman Maine. Ele a transforma numa estrela. Mas enquanto ela conquista o sucesso, Norman se afunda no alcoolismo.', cat: 'Novo', name: 'Nasce uma Estrela (1937)', image: '/pMnXtyGFUrCRH7tVGIkkrGHs3AX.jpg', filme: 'Nasce%20uma%20estrela%201937.mp4?alt=media&token=715b5639-8d28-425b-940c-03e96576abc9', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/nasceumaestrelaTrailer.mp4?alt=media&token=5c570f71-a936-458f-bb96-17a1b073722b', genres: Array(1)},
  {id: 6160322, desc: 'Ousada sátira de Chaplin a Hitler foi exibida pela primeira vez em Nova York. A produção enfrentou resistência, e sua realização só foi possível por o cineasta não ter noção da real extensão do horror na Alemanha.', cat: 'Novo', name: 'Charlie Chaplin - O Grande Ditador(1940)', image: '/8AMKZODrCvWe2sCy9Ts7VsLcKd6.jpg', filme: 'Clarles%20Chaplin%20-%20O%20Grande%20Ditador%201940.mp4?alt=media&token=129b9c16-4934-4fab-81ff-91b8c5d45bc0', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/ditadorTrailer.mp4?alt=media&token=b99ba8a9-001d-43c1-ae57-fc85224066dc', genres: Array(1)},
  {id: 61603712, desc: 'O icónico Vagabundo está empregado em uma fábrica, onde as máquinas inevitável e completamente o dominam e vários percalços o levam para a prisão. Entre suas passagens pela prisão, ele conhece e faz amizade com uma garota órfã. Ambos, juntos e separados, tentam lidar com as dificuldades da vida moderna,', cat: 'Novo', name: 'Chaplin - Tempos Modernos (1936)', image: '/kSlO1pHpwQfPQdgVPr7dJiJNtJ8.jpg', filme: 'chaplim%20tempos%20modernos.mp4?alt=media&token=26f1e7bb-4ccb-42b5-ab47-1198b5f7fdcd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/temposmodernosTrailer.mp4?alt=media&token=5e21679f-c18b-4342-ab7c-8ff5fdb9da09', genres: Array(2)},
  {id: 61603711, desc: 'Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.', cat: 'Novo', name: 'Viagem à Lua (1902)', image: '/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg', filme: 'Viagem%20a%20Lua%201902.mp4?alt=media&token=d2c4ff0b-904f-4ce5-8538-2ce52409ba91', genres: Array(2)},
  {id: 6160377, desc: 'Em um pequeno barco à deriva, duas mulheres e um homem relembram seu passado recente. Uma das mulheres escapou da prisão; a outra estava desesperada; e o homem tinha perdido sua amante. Cansados, eles param de remar e se conformam com a morte, relembrando as situações de seu passado.', cat: 'Novo', name: 'Limite (1931)', image: '/vyJSwV80dzj2WI1i6zZ68MDIo57.jpg', filme: 'Limite%201931.mp4?alt=media&token=fd6e5b11-172b-4d56-80e2-c3c5b6ac8584', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/limiteTrailer.mp4?alt=media&token=14cfb369-dcce-476b-9316-b0ec546556e0', genres: Array(1)},


  
  {id: 61603710, desc: 'Extremamente influente e considerado como a grande obra do movimento expressionista alemão no cinema, "O Gabinete do Dr. Caligari" compõe uma metáfora do olhar deformado, com ruas estreitas e entrecortadas, telhados góticos e cubistas e prédios e objetos deformados, resultando em uma das obras-primas das primeiras décadas do cinema e uma das mais importantes referências estéticas até hoje', cat: 'terror', name: 'O Gabinete do Dr. Caligari (1920)', image: '/m0N89MIIu6qYZcujCRzBHrkZbns.jpg', filme: 'O%20Gabinete%20do%20Dr.%20Caligari%201920.mp4?alt=media&token=0002acb8-2e62-49bb-ab10-f99e8399f384', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/caligariTrailer.mp4?alt=media&token=232f24c1-4639-432b-8f56-1c96a08dbbe4', genres: Array(2)},
  {id: 61603714, desc: 'Tim e sua equipe estão no auge com um programa de caça fantasma. Eles são bons em sustos, mas ainda melhores em fazer brincadeiras. Quando a equipe chega a uma casa para uma nova investigação, eles podem não ser capazes de ver que agora os mundos estão se misturando e que a morte pode estar muito próxima.', cat: 'terror', name: 'A Casa Assombrada (2019)', image: '/xbrRZrytBhNU4aSUdRgvlkahbD4.jpg', filme: 'A%20Casa%20Assombrada%202019.mp4?alt=media&token=abf9422c-e19e-4409-9ede-60e7831d5df9', genres: Array(2)},
  {id: 6160373, desc: 'O jovem advogado inglês Jonathan Harker aceita um trabalho em uma vila sombria nas brumas da Transilvânia, na Romênia. Ele é capturado e aprisionado pelo vampiro Drácula, que viaja para Londres inspirado por uma fotografia da noiva de Harker, Mina Murray. Na Grã-Bretanha', cat: 'terror', name: 'Drácula de Bram Stoker', image: '/1ZVsHrPyogvUMJEuuB9eCkHSwaR.jpg', filme: 'Drácula%20de%20Bram%20Stoker%201992.mp4?alt=media&token=94453995-d284-43b8-9865-5442346d4dd0', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/draculaTrailer.mp4?alt=media&token=c8061ce7-8490-4f06-ae6f-f1f1caf394b6', genres: Array(1)},
  {id: 61603713, desc: 'Frankenstein é um filme de 1910 do genêro terror mudo. O filme é baseado no livro Frankenstein de Mary Shelley. Foi a primeira versão para os cinemas do Frankenstein. Algumas partes desse filme são coloridas, geralmente em sépia', cat: 'terror', name: 'Frankenstein (1910)', image: '/vqZEHv2KxjyVXjbtMhIDIZ6xoLf.jpg', filme: 'Frankenstein-1910.mp4?alt=media&token=727f907a-4a74-45f7-a795-ba5f8f288d27', genres: Array(2)},
  {id: 6160379, desc: 'Jonathan Harker é enviado ao castelo do conde Drácula para lhe vender uma casa em Virna, onde mora. Mas o conde é um vampiro. Inspirado por uma foto de Lucy Harker, mulher de Jonathan, Drácula se muda para Virna, trazendo morte e destruição.', cat: 'terror', name: 'Nosferatu, o Vampiro da Noite (1979)', image: '/h3wvrOtDI8saCxNAgadiZOSG0Rg.jpg', filme: 'Nosferatu%20-%20O%20Vampiro%20da%20Noite%201979.mp4?alt=media&token=4572df28-603d-4c82-96ff-a731a198c3fd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/Nosferatu1979.mp4?alt=media&token=006e8213-0e8c-4377-a46c-86c75d1a0dfa', genres: Array(1)},  
  {id: 6160374, desc: 'Um filme baseado em uma tragédia Shakespeariana, que conta a estória de um príncipe dinamarquês que contempla se vingar do tio que matou o seu pai, casando-se com sua mãe viúva, para usurpar o trono.',  cat: 'terror', name: 'Hamlet (1948)', image: '/tFfucMJh4Me1JYBIRJcOokWWuLs.jpg', filme: 'Hamlet%201948.mp4?alt=media&token=dbd4a304-b137-4395-beed-eda5a7e435a1 ', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/hamletTrailer.mp4?alt=media&token=e4e6749e-df0b-4d34-8773-b1fd60cb4dd6', genres: Array(1)},
  {id: 6160373, desc: 'Chu Xun é uma jovem escritora de Hong Kong que começa a ter misteriosas visões e acaba indo parar num mundo sinistro de fantasia onde a história que está escrevendo é ambientada.', cat: 'terror', name: 'Assombração (2006)', image: '/y1mIlaatNm5tiCse2BeC0cEU94N.jpg', filme: 'ASSOMBRA%C3%87%C3%83O%20FILME%20FANTASMA%20TERROR%20ASIATICO%20dublado.mp4?alt=media&token=1e55ba9c-566c-4e84-81b7-138e15d2301e', genres: Array(1)},
 
 
 
 
 
 
  {id: 61603711, desc: 'Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.', cat: 'antigos', name: 'Viagem à Lua (1902)', image: '/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg', filme: 'Viagem%20a%20Lua%201902.mp4?alt=media&token=d2c4ff0b-904f-4ce5-8538-2ce52409ba91', genres: Array(2)},
  {id: 61603713, desc: 'Frankenstein é um filme de 1910 do genêro terror mudo. O filme é baseado no livro Frankenstein de Mary Shelley. Foi a primeira versão para os cinemas do Frankenstein. Algumas partes desse filme são coloridas, geralmente em sépia', cat: 'antigos', name: 'Frankenstein (1910)', image: '/vqZEHv2KxjyVXjbtMhIDIZ6xoLf.jpg', filme: 'Frankenstein-1910.mp4?alt=media&token=727f907a-4a74-45f7-a795-ba5f8f288d27', genres: Array(2)},
  {id: 6160371, desc: 'Uma mãe abandona seu filho com um bilhete em uma limusine, mas o carro acaba sendo roubado e a criança é deixada em uma lata de lixo. Um vagabundo encontra o bebê e passa a cuidar dele. Cinco anos depois, a mulher tenta encontrar o filho perdido.', cat: 'antigos', name: 'Charlie Chaplin - O Garoto(1921)', image: '/4H81TyAvjt7WOLXl7km34ZZQGl6.jpg', filme: 'Charles%20chaplin%20o%20garoto.mp4?alt=media&token=dc7e76d6-785b-4f97-886f-e96723a9c63c', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/garotoTrailer.mp4?alt=media&token=a901d0b4-065d-4b99-a143-2a7f4dcaca5f', genres: Array(1)},
  {id: 6160375, desc: 'Robin Hood é um filme mudo de aventura de 1922 estrelado por Douglas Fairbanks e Wallace Beery. Foi o primeiro filme a ter uma estreia em Hollywood, realizada no Graumans Egyptian Theatre em 18 de outubro de 1922.', cat: 'antigos', name: 'Robin Hood (1922)', image: '/5qYwVtsf2IMmSAzLfjTGB20vPiz.jpg', filme: 'Hobbin%20hood.mp4?alt=media&token=ec329f58-abfd-4dd3-8576-abf7552e488a', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/robinhoodTrailer.mp4?alt=media&token=1b0b9675-45a1-4b53-9acb-d16b5efa6826', genres: Array(1)},
  {id: 6160377, desc: 'Em um pequeno barco à deriva, duas mulheres e um homem relembram seu passado recente. Uma das mulheres escapou da prisão; a outra estava desesperada; e o homem tinha perdido sua amante. Cansados, eles param de remar e se conformam com a morte, relembrando as situações de seu passado.', cat: 'antigos', name: 'Limite (1931)', image: '/vyJSwV80dzj2WI1i6zZ68MDIo57.jpg', filme: 'Limite%201931.mp4?alt=media&token=fd6e5b11-172b-4d56-80e2-c3c5b6ac8584', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/limiteTrailer.mp4?alt=media&token=14cfb369-dcce-476b-9316-b0ec546556e0', genres: Array(1)},
  {id: 6160376, desc: 'A crise econômica levou Godfrey a viver embaixo da ponte. Mas ao ser convidado para se tornar mordomo de uma família rica, sua sorte muda. Na mansão, ele conhece a bela Irene e aos poucos vai conquistando a confiança de todos.', cat: 'antigos', name: 'Irene, a Teimosa (1936)', image: '/xCIYcIdsC3vGqLNtR9w97vPxWnT.jpg', filme: 'Irene%2C%20a%20Teimosa%20(My%20Man%20Godfrey)%20-%201936.mp4?alt=media&token=3b3bd6a9-87da-44e2-9939-172ffc1245fb', genres: Array(1)},
  {id: 61603712, desc: 'O icónico Vagabundo está empregado em uma fábrica, onde as máquinas inevitável e completamente o dominam e vários percalços o levam para a prisão. Entre suas passagens pela prisão, ele conhece e faz amizade com uma garota órfã. Ambos, juntos e separados, tentam lidar com as dificuldades da vida moderna,', cat: 'antigos', name: 'Chaplin - Tempos Modernos (1936)', image: '/kSlO1pHpwQfPQdgVPr7dJiJNtJ8.jpg', filme: 'chaplim%20tempos%20modernos.mp4?alt=media&token=26f1e7bb-4ccb-42b5-ab47-1198b5f7fdcd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/temposmodernosTrailer.mp4?alt=media&token=5e21679f-c18b-4342-ab7c-8ff5fdb9da09', genres: Array(2)},

 
 


  {id: 6160373, desc: 'O jovem advogado inglês Jonathan Harker aceita um trabalho em uma vila sombria nas brumas da Transilvânia, na Romênia. Ele é capturado e aprisionado pelo vampiro Drácula, que viaja para Londres inspirado por uma fotografia da noiva de Harker, Mina Murray. Na Grã-Bretanha', cat: 'Novo', name: 'Drácula de Bram Stoker', image: '/1ZVsHrPyogvUMJEuuB9eCkHSwaR.jpg', filme: 'Drácula%20de%20Bram%20Stoker%201992.mp4?alt=media&token=94453995-d284-43b8-9865-5442346d4dd0', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/draculaTrailer.mp4?alt=media&token=c8061ce7-8490-4f06-ae6f-f1f1caf394b6', genres: Array(1)},
  {id: 61603711, desc: 'Um grupo de homens viaja à Lua, sendo levados por uma cápsula lançada de um canhão gigante, mas acabam sendo capturados por homens-lua.', cat: 'antigos', name: 'Viagem à Lua (1902)', image: '/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg', filme: 'Viagem%20a%20Lua%201902.mp4?alt=media&token=d2c4ff0b-904f-4ce5-8538-2ce52409ba91', genres: Array(2)},
  {id: 6160379, desc: 'Jonathan Harker é enviado ao castelo do conde Drácula para lhe vender uma casa em Virna, onde mora. Mas o conde é um vampiro. Inspirado por uma foto de Lucy Harker, mulher de Jonathan, Drácula se muda para Virna, trazendo morte e destruição.', cat: 'terror', name: 'Nosferatu, o Vampiro da Noite (1979)', image: '/h3wvrOtDI8saCxNAgadiZOSG0Rg.jpg', filme: 'Nosferatu%20-%20O%20Vampiro%20da%20Noite%201979.mp4?alt=media&token=4572df28-603d-4c82-96ff-a731a198c3fd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/Nosferatu1979.mp4?alt=media&token=006e8213-0e8c-4377-a46c-86c75d1a0dfa', genres: Array(1)},  
  {id: 61603713, desc: 'Frankenstein é um filme de 1910 do genêro terror mudo. O filme é baseado no livro Frankenstein de Mary Shelley. Foi a primeira versão para os cinemas do Frankenstein. Algumas partes desse filme são coloridas, geralmente em sépia', cat: 'antigos', name: 'Frankenstein (1910)', image: '/vqZEHv2KxjyVXjbtMhIDIZ6xoLf.jpg', filme: 'Frankenstein-1910.mp4?alt=media&token=727f907a-4a74-45f7-a795-ba5f8f288d27', genres: Array(2)},
  {id: 6160322, desc: 'Ousada sátira de Chaplin a Hitler foi exibida pela primeira vez em Nova York. A produção enfrentou resistência, e sua realização só foi possível por o cineasta não ter noção da real extensão do horror na Alemanha.', cat: 'Novo', name: 'Charlie Chaplin - O Grande Ditador(1940)', image: '/8AMKZODrCvWe2sCy9Ts7VsLcKd6.jpg', filme: 'Clarles%20Chaplin%20-%20O%20Grande%20Ditador%201940.mp4?alt=media&token=129b9c16-4934-4fab-81ff-91b8c5d45bc0', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/ditadorTrailer.mp4?alt=media&token=b99ba8a9-001d-43c1-ae57-fc85224066dc', genres: Array(1)},
  {id: 61603712, desc: 'O icónico Vagabundo está empregado em uma fábrica, onde as máquinas inevitável e completamente o dominam e vários percalços o levam para a prisão. Entre suas passagens pela prisão, ele conhece e faz amizade com uma garota órfã. Ambos, juntos e separados, tentam lidar com as dificuldades da vida moderna,', cat: 'Novo', name: 'Chaplin - Tempos Modernos (1936)', image: '/kSlO1pHpwQfPQdgVPr7dJiJNtJ8.jpg', filme: 'chaplim%20tempos%20modernos.mp4?alt=media&token=26f1e7bb-4ccb-42b5-ab47-1198b5f7fdcd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/temposmodernosTrailer.mp4?alt=media&token=5e21679f-c18b-4342-ab7c-8ff5fdb9da09', genres: Array(2)},
  {id: 61603710, desc: 'Extremamente influente e considerado como a grande obra do movimento expressionista alemão no cinema, "O Gabinete do Dr. Caligari" compõe uma metáfora do olhar deformado, com ruas estreitas e entrecortadas, telhados góticos e cubistas e prédios e objetos deformados, resultando em uma das obras-primas das primeiras décadas do cinema e uma das mais importantes referências estéticas até hoje', cat: 'terror', name: 'O Gabinete do Dr. Caligari (1920)', image: '/m0N89MIIu6qYZcujCRzBHrkZbns.jpg', filme: 'O%20Gabinete%20do%20Dr.%20Caligari%201920.mp4?alt=media&token=0002acb8-2e62-49bb-ab10-f99e8399f384', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/caligariTrailer.mp4?alt=media&token=232f24c1-4639-432b-8f56-1c96a08dbbe4', genres: Array(2)},



  {id: 6160378, name: 'Nasce uma Estrela (1937)', image: '/pMnXtyGFUrCRH7tVGIkkrGHs3AX.jpg', filme: 'Nasce%20uma%20estrela%201937.mp4?alt=media&token=715b5639-8d28-425b-940c-03e96576abc9', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/nasceumaestrelaTrailer.mp4?alt=media&token=5c570f71-a936-458f-bb96-17a1b073722b', genres: Array(1)},
  {id: 6160374, name: 'Hamlet (1948)', image: '/tFfucMJh4Me1JYBIRJcOokWWuLs.jpg', filme: 'Hamlet%201948.mp4?alt=media&token=dbd4a304-b137-4395-beed-eda5a7e435a1 ', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/hamletTrailer.mp4?alt=media&token=e4e6749e-df0b-4d34-8773-b1fd60cb4dd6', genres: Array(1)},
  {id: 6160379, name: 'Nosferatu, o Vampiro da Noite (1979)', image: '/h3wvrOtDI8saCxNAgadiZOSG0Rg.jpg', filme: 'Nosferatu%20-%20O%20Vampiro%20da%20Noite%201979.mp4?alt=media&token=4572df28-603d-4c82-96ff-a731a198c3fd', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/Nosferatu1979.mp4?alt=media&token=006e8213-0e8c-4377-a46c-86c75d1a0dfa', genres: Array(1)},

  {id: 61603710, name: 'O Gabinete do Dr. Caligari (1920)', image: '/m0N89MIIu6qYZcujCRzBHrkZbns.jpg', filme: 'O%20Gabinete%20do%20Dr.%20Caligari%201920.mp4?alt=media&token=0002acb8-2e62-49bb-ab10-f99e8399f384', trailer: 'https://firebasestorage.googleapis.com/v0/b/underflix-8485f.appspot.com/o/caligariTrailer.mp4?alt=media&token=232f24c1-4639-432b-8f56-1c96a08dbbe4', genres: Array(2)},
  {id: 61603715, name: 'Thor: Love and Thunder 15', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 61603716, name: 'Thor: Love and Thunder 16', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 61603717, name: 'Thor: Love and Thunder 17', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 61603718, name: 'Thor: Love and Thunder 18', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 61603719, name: 'Thor: Love and Thunder 19', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 61603720, name: 'Thor: Love and Thunder 20', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(2)},
  {id: 6160371, name: 'Thor: Love and Thunder 1', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160322, name: 'Thor: Love and Thunder 2', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160373, name: 'Thor: Love and Thunder 3', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160374, name: 'Thor: Love and Thunder 4', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160375, name: 'Thor: Love and Thunder 5', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160376, name: 'Thor: Love and Thunder 6', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160377, name: 'Thor: Love and Thunder 7', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160378, name: 'Thor: Love and Thunder 8', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 6160379, name: 'Thor: Love and Thunder 9', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603710, name: 'Thor: Love and Thunder 10', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603711, name: 'Thor: Love and Thunder 11', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603712, name: 'Thor: Love and Thunder 12', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603713, name: 'Thor: Love and Thunder 13', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603714, name: 'Thor: Love and Thunder 14', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603715, name: 'Thor: Love and Thunder 15', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603716, name: 'Thor: Love and Thunder 16', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603717, name: 'Thor: Love and Thunder 17', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603718, name: 'Thor: Love and Thunder 18', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603719, name: 'Thor: Love and Thunder 19', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},
  {id: 61603720, name: 'Thor: Love and Thunder 20', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(4)},

  {id: 6160371, name: 'Thor: Love and Thunder 1', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160322, name: 'Thor: Love and Thunder 2', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160373, name: 'Thor: Love and Thunder 3', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160374, name: 'Thor: Love and Thunder 4', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160375, name: 'Thor: Love and Thunder 5', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160376, name: 'Thor: Love and Thunder 6', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160377, name: 'Thor: Love and Thunder 7', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160378, name: 'Thor: Love and Thunder 8', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 6160379, name: 'Thor: Love and Thunder 9', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(1)},
  {id: 61603710, name: 'Thor: Love and Thunder 10', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603711, name: 'Thor: Love and Thunder 11', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603712, name: 'Thor: Love and Thunder 12', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603713, name: 'Thor: Love and Thunder 13', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603714, name: 'Thor: Love and Thunder 14', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603715, name: 'Thor: Love and Thunder 15', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603716, name: 'Thor: Love and Thunder 16', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603717, name: 'Thor: Love and Thunder 17', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603718, name: 'Thor: Love and Thunder 18', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603719, name: 'Thor: Love and Thunder 19', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},
  {id: 61603720, name: 'Thor: Love and Thunder 20', image: '/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg', genres: Array(3)},

  
  

]






  const getRawData = async (api, genres, paging = false) => {
    const moviesArray = [];

    console.log('arraymovies',moviesArray);
    return objM;
  };

    export const fetchMovies = createAsyncThunk(
        "netflix/trending", 
        async({ type }, thunkApi) => {
        const {
            netflix: { genres },
    } = thunkApi.getState();
    return getRawData(
        `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
    genres,
    true
    );
   
    } 
    
    );
//     return getRawData(`${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genres}`)






export const getUsersLikedMovies = createAsyncThunk(
    "netflix/getLiked",
    async (email) => {
      const {
        data: { movies },
      } = await axios.get(`http://localhost:5000/api/user/liked/${email}`);
      return movies;
    }
  );
  
  export const removeMovieFromLiked = createAsyncThunk(
    "netflix/deleteLiked",
    async ({ movieId, email }) => {
      const {
        data: { movies },
      } = await axios.put("http://localhost:5000/api/user/remove", {
        email,
        movieId,
      });
      return movies;
    }
  );
  












const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(getGenres.fulfilled, (state, action)=> {
            state.genres = action.payload;
            state.genresLoaded = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action)=> {
            state.movies = action.payload;
          
        });
    },
});

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer,
    },
})