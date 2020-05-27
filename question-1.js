function solution(record) {
    var answer = [];

    /**
     * NB: Based on answer format, all class and function definition is placed into one function in solution
     */
    

    var OpenChat = class{

        constructor(){
            this.user_database = {};
            this.activity_log = [];
        }


        static is_input_valid(uid, name){
            if (uid.length > 10 || name.length > 10) {
                console.log("Error: uid or name should have length betweeen 1 - 10");
                return false;
            }
            if (uid.match(/[|\\/~^:,;?!&%$@*+]/) || name.match(/[|\\/~^:,;?!&%$@*+]/)){
                console.log("Error: uid or name should consists only uppercase letters, lowercase letters, or number.");
                return false;
            }
            return true;
        }
        
        enter(uid, name){
            if (OpenChat.is_input_valid(uid, name)) {
                this.user_database[uid] = name;
                this.activity_log.push({
                    "uid": uid,
                    "type": "enter"
                });
            }
        }


        leave(uid){
            this.activity_log.push({
                "uid": uid,
                "type": "leave"
            });
        }
        

        change_name(uid, name){
            if (OpenChat.is_input_valid(uid, name)) {
                if ((uid in this.user_database)){
                    this.user_database[uid] = name;
                }
            }
        }


        get_activity_log(){
            return this.activity_log.map(function(x){
                if (x.type == 'enter') {
                    return this[x.uid] + ' came in.';
                }
                if (x.type == 'leave') {
                    return this[x.uid] + ' has left.';
                }
            }, this.user_database); // Value that passed into this parameter (which is user_database id data)
        }


        decode_action(sentences){
            const action_string = sentences.split(' ');
            if (action_string[0] == 'Enter') {
                this.enter(action_string[1], action_string[2]);
                return
            }
            if (action_string[0] == 'Leave') {
                this.leave(action_string[1]);
                return;
            }
            if (action_string[0] == 'Change') {
                this.change_name(action_string[1], action_string[2]);
                return;
            }
        }
    }

    // Main function    
    var open_chat = new OpenChat();

    if (record.length > 100000 || record.length == 0) {
        console.log("Error: the record should be between 1-100,000")
        return;
    }

    for (let i = 0; i < record.length; i++) {
        const sentences = record[i];
        open_chat.decode_action(sentences);
        
    }
    answer = open_chat.get_activity_log();
    return answer;
}