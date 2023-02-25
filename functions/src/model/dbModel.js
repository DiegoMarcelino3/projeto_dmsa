const db = require("../config/dbConfig.js")

class DbModel {

    static async readAllDoc() {
        try {
            const data = await db.collection("products").get()
            const list = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            return list
        } catch (error) {
            console.log(error)
            return 
        }
    }

    static async readOneDoc(id) {
        try {
            const data = await db.collection("products").doc(id).get()
            return data.data()
        } catch (error) {
            console.log(error)
            return
        }
    }
    
    static async addDoc(data) {
        try {
            await db.collection("products").add(data)
            return
        } catch (error) {
            console.log(error)
            return
        }
    }
    static async updateDoc(id, data) {
        try {
            await db.collection("products").doc(id).update(data)
            return
        } catch (error) {
            console.log(error)
            return
        }
    }
    static async deleteDoc(id) {
        try {
            await db.collection("products").doc(id).delete()
            return
        } catch(error) {
            console.log(error)
            return
        }
    }
}

module.exports = DbModel