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
    static async fetchAllKanji(){

        options.url = `${BASE_URL}/kanji/all`;

        const response_ = await axios.request(options).then(function (response) {
            return response.data
        });

        return response_;
    }

    static async getKanjiByWord(word) {
        const data = await this.fetchAllKanji();

        word.trim().toLowerCase();

        const filteredResult = data.filter(kanji => kanji.kanji.meaning.english.split(',').includes(word));

        return filteredResult;
    }

    static async getKanjiByCharacter(character) {
        const data = await this.fetchAllKanji();

        character.trim().toLowerCase();

        const filteredResult = data.filter(kanji => kanji.kanji.character === character);

        return filteredResult;
    }

    static async getKanjiByPrononciation(prononciation) {
        const data = await this.fetchAllKanji();

        prononciation.trim().toLowerCase();

        const filteredResult = data.filter(kanji => kanji.kanji.kunyomi.romaji.split(',').includes(prononciation) || kanji.kanji.onyomi.romaji.split(',').includes(prononciation));

        return filteredResult;
    }

    static async getKanjiByGrade(grade){
        const data = await this.fetchAllKanji();

        const filteredResult = data.filter(kanji => kanji.references.grade === grade);

        return filteredResult;        
    }
}