import { Client } from "./entitys/client.entity";
import config from '../config';
import axios from "axios";
import { UpdateClientDto } from "./dto/update-client.dto";
import { DashboardData } from "./entitys/dashboard.entity";
class ClientApi {
    urlClients: string;
    constructor() {
        this.urlClients = `${config.API_URL}/api/clients`;
    }

    async getAll(): Promise<UpdateClientDto[]> {
        
        let response = await axios.get(this.urlClients);
        console.log("me ejecuto");
        return (response.data) as UpdateClientDto[];
    }

    async getDataDashboard(): Promise<DashboardData> {
        let response = await axios.get(`${this.urlClients}/dashboard`);
        return (response.data) as DashboardData;
    }

    async create(client: Client): Promise<UpdateClientDto> {
        let response = await axios.post(this.urlClients, client);
        return (response.data) as UpdateClientDto;
    }

}

export const clientApi = new ClientApi();