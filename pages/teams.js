import React, { useState } from "react";
import Teamform from "./../components/addteamform";
import axios from "axios";

export default function Teams() {
  const [team, setTeam] = useState([]);

  async function getData(team) {
    setTeam({ team });

    let teams = await axios
      .get(
        `/api/teams/add`,
        { params: team },
        {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      )
      .then(function (response) {
        return response.data;
      })

      .catch(function (error) {
        console.log(error);
      });

    localStorage.setItem("teams", JSON.stringify(teams));
  }

  return <Teamform returnData={getData}></Teamform>;
}
