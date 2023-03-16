import axios from "axios";
import { BASE_URL, HOST_URL, API_KEY_PARAM } from "../config";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${API_KEY_PARAM}`,
        'X-RapidAPI-Host': `${HOST_URL}`
    }
};

export class KanjiAPI {
    static async fetchKanjiList(){
        options.url = `${BASE_URL}/kanji/all`;

        const response_ = await axios.request(options).then(function (response) {
            return response.data
        });

        return response_;
    }
}