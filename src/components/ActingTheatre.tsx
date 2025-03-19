import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function Teatro() {
  return (
    <Stack spacing={15}>
      <Project
        name={"Estamos Progredindo"}
        description={
          "Exploring the movement that originated in Europe, the Theatre of the Absurd, Estamos Progredindo (EN: We're Pregressing) is a collection of many authors and plays."
        }
        info={"Direção: Ticiana Studart, 2019."}
        img={"./credits/Progredindo.JPG"}
        side={"r"}
      />
      <Project
        name={"Aurora da Minha Vida"}
        description={
          "A Aurora da Minha Vida is a play by Naum Alves de Souza that tells the story of an old classroom. The story shows the relationships and conflicts within a repressive and undemocratic school system in a light and satirical way. Teachers, students, personalities, morals, oppression and desire for freedom, reflecting Brazilian politics of the time."
        }
        info={"Direção: Luiz Furlaneto, 2019."}
        img={"./credits/Aurora.JPG"}
        side={"l"}
      />
      <Project
        name={"Teatro Decomposto"}
        description={
          "Decomposed Theatre is a modular play by Romanian playwright Matéi Vișniec that explores the challenges of coping with major change and crisis. The play is made up of short pieces that can be arranged in any order, similar to a series of short stories. The play's themes include the disruptive effects of three plagues on a community and Jasmin played the Butterfly Crazy-Lady plague. "
        }
        info={"Direção: Marcos França, 2019."}
        img={"./credits/Decomposto.JPG"}
        side={"r"}
      />
      <Project
        name={"!RUNNERS 2 - O Retorno"}
        description={
          "A Aurora da Minha Vida is a play by Naum Alves de Souza that tells the story of an old classroom. The story shows the relationships and conflicts within a repressive and undemocratic school system in a light and satirical way. Teachers, students, personalities, morals, oppression and desire for freedom, reflecting Brazilian politics of the time."
        }
        info={"Direção: João Dabul, 2018 a 2020."}
        img={"./credits/Aurora.JPG"}
        side={"l"}
      />

      <Project
        name={"Depois da Queda"}
        description={
          "Depois da Queda (EN: After the Fall), is one of Arthur Miller's more personal plays, is a thinly veiled personal critique centered on Miller's recent divorce from Marilyn Monroe: the plot takes place inside the mind of Quentin, a New York City Jewish intellectual who decides to reexamine his life, in order to determine whether or not he should marry his most recent love, Holga, played by Jasmin."
        }
        info={"Direção: Ticiana Studart, 2018."}
        img={"./credits/Queda.JPG"}
        side={"r"}
      />
      <Project
        name={"O Jantar"}
        description={
          "A Aurora da Minha Vida is a play by Naum Alves de Souza that tells the story of an old classroom. The story shows the relationships and conflicts within a repressive and undemocratic school system in a light and satirical way. Teachers, students, personalities, morals, oppression and desire for freedom, reflecting Brazilian politics of the time."
        }
        info={"Direção: Ticiana Studart, 2018."}
        img={"./credits/jantar.jpeg"}
        side={"l"}
      />

      <Project
        name={"Paixão de Cristo"}
        description={
          "Depois da Queda (EN: After the Fall), is one of Arthur Miller's more personal plays, is a thinly veiled personal critique centered on Miller's recent divorce from Marilyn Monroe: the plot takes place inside the mind of Quentin, a New York City Jewish intellectual who decides to reexamine his life, in order to determine whether or not he should marry his most recent love, Holga, played by Jasmin."
        }
        info={"Direção: Ticiana Studart, 2010."}
        img={"./credits/Queda.JPG"}
        side={"r"}
      />
      <Project
        name={"Em busca do Coelho Perdido"}
        description={
          "A Aurora da Minha Vida is a play by Naum Alves de Souza that tells the story of an old classroom. The story shows the relationships and conflicts within a repressive and undemocratic school system in a light and satirical way. Teachers, students, personalities, morals, oppression and desire for freedom, reflecting Brazilian politics of the time."
        }
        info={"Direção: Jairo Santos, 2018."}
        img={"./credits/jantar.jpeg"}
        side={"l"}
      />

      <Project
        name={"A Revolta dos Brinquedos"}
        description={
          "Depois da Queda (EN: After the Fall), is one of Arthur Miller's more personal plays, is a thinly veiled personal critique centered on Miller's recent divorce from Marilyn Monroe: the plot takes place inside the mind of Quentin, a New York City Jewish intellectual who decides to reexamine his life, in order to determine whether or not he should marry his most recent love, Holga, played by Jasmin."
        }
        info={"Direção: Renata Martins, 2007."}
        img={"./credits/Queda.JPG"}
        side={"r"}
      />
    </Stack>
  );
}
