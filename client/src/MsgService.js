import axios from "axios";

const url = "http://localhost:5000/api/Msgs/";

class MsgService {
    // get messages
    static getMsg() {
        return new Promise(async(resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map((msg) => ({
                        ...msg,
                        createdAt: new Date(msg.createdAt),
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }

    // Create message
    static insertMsg(text) {
        return axios.post(url, {
            text,
        });
    }

    // Delete message
    static deleteMsg(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default MsgService;