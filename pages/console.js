import { useState, useEffect } from 'react'
import Terms from '../components/console_terms'
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import jsCookie from 'js-cookie';
import Head from 'next/head'

import Searchbar from '../components/search'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Container';
import {useStyles} from '../utils/style';

export default function Console(team) {

    const classes = useStyles()
    let [teamSelected, setTeams] = useState([]);

    let teamCol = team.team.team

    const handleChange = (event) => {
        setTeams(event.target.value)
    };

    function teamMenu(teamCol) {

        if (teamCol != null) {

            teamCol.map((team, i) => {
                return <MenuItem value={team.teams.team_name}>{team.teams.team_name}</MenuItem>
            })

        } else {
            return <MenuItem value='Self'>{'Self'}</MenuItem>
        }
    }

    useEffect(() => {

        jsCookie.set('team', teamSelected);

    }, [teamSelected])

    return (
        <>
            <Terms></Terms>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <Box className={classes.box} >
            <Select variant={'outlined'}
                    onChange={handleChange}
                    className= {classes.select}
                >
                    {
                        teamMenu(teamCol)

                    }
                </Select>
                <Searchbar></Searchbar><br />
                <Button className={classes.btn} href={'./addword'} >
                    <Icon style={{ fontSize: 40 }} >add_circle</Icon>
                </Button>
            </Box>
        </>

    )
}

const fetchData = async (query, auth) => await axios.get(`/api/console/${query.def}`, { headers: { auth: auth } })
    .then(res => ({

        team: res.data

    }))
    .catch(() => ({

        error: true

    }),
    );

export async function getServerSideProps(context) {

    let cookie = context.req.headers.cookie

    let auth = cookie.split('; ')
        .find(row => row.startsWith('auth'))
        .split('=')[1]

    const teams = await fetchData(context.query, auth);

    return {
        props: {
            team: teams
        }
    }

}