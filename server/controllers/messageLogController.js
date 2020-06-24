let messageLog = [
    {
        id: 0, 
        user: 'System',
        message: 'Welcome to chat. Keep it clean.'
    }

];

let id = 0;

module.exports ={
    getAll: (req, res) => {
        res.status(200).send(messageLog)
    },

    addOne: (req, res) => {
        
        let newMessage = {
            id: id,
            user: req.body.user,
            message: req.body.message
        }

        id++;

        messageLog.unshift(newMessage);
        res.status(200).send(messageLog);
    },

    editOne: (req, res) => {
        let index = messageLog.findIndex(e => e.id === +req.params.id);
        messageLog[index].message = req.body.message;
        res.status(200).send(messageLog)
    },

    deleteAll: (req, res) => {
        const {user} = req.params;
        console.log(user)
        messageLog = [];

        res.sendStatus(200);
    }
}
