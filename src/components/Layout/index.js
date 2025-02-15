import React from "react";
import ButtonAppBar from "../AppBar";
import { Container } from "./styles";
import Footer from "../Footer";
import { Button } from "@mui/material";
import SimpleLineChart from "../Charts/ChartLines";
import SimpleBarChart from "../Charts/ChartBar";
import DonutChart from "../Charts/ChartDonut";
import ChartPie from "../Charts/ChartPie";
import ArcDesign from "../Charts/Gauge";
import Planilha from "../Planilha/index";
import ArcDesignPercents from "../Charts/GaugePercents";
const style = {
    background: "#ffa602c5", 
    '&:hover': {
        backgroundColor: "#ffa602f1",
    }
}

const Layout = () => {
    return (
        <>
            <ButtonAppBar/>
            <Container>
                <menu>
                    <ul>
                        <li><Button sx={style} variant="contained">Voltar</Button></li>
                        <li><Button sx={style} variant="contained">Adicionar Planilha</Button></li>
                        <li><Button sx={style} variant="contained">Exportar Planilha</Button></li>
                        <li><Button sx={style} variant="contained">Importar Planilha</Button></li>
                    </ul>
                </menu>
                <div className="grid-container">
                    <div className="grid-item i1">
                        <div className="gi">
                            <SimpleLineChart/>
                        </div>
                        <div className="gi">
                            <SimpleBarChart/>
                        </div>
                    </div>
                    <div className="grid-item i2">
                        <div class="gi">
                            <ChartPie/>
                        </div>
                        <div class="gi">
                            <DonutChart/>
                        </div>
                        <div class="gi">
                            <DonutChart/>
                        </div>
                    </div>
                    <div className="grid-item i3">
                        <div class="gi">
                            <ArcDesignPercents/>
                        </div>
                        <div class="gi">
                            <ArcDesign/>
                        </div>
                        <div class="gi">
                            <ArcDesign/>
                        </div>
                    </div>
                    <div className="grid-item i4">
                        <div class="gi">
                            <Planilha/>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>   
    );
}

export default Layout;