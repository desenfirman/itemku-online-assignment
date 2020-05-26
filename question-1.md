# Question 1

## Problem Statement

```text
There is an open chat.

When a person enters the chat, the following message is displayed.
"[Nickname] came in."

When a person leaves the chat, the following message is displayed.
"[Nickname] has left."

There are two ways to change nicknames in a chat:
After leaving the chat, you can re-enter with the new nickname.
Change nickname in a chat.

When changing a nickname, the nickname of the previous messages displayed in the chat is also changed.

For example, if a person uses the nickname "Muzi" and "Prodo" in the chat in order, the following message is displayed in the chat.

"Muzi came in." "Prodo came in."

When “Muzi” leaves the room, the following message is left.
"Muzi came in." "Prodo came in." "Muzi has left."

When Muzi comes back in again with the new nickname, Prodo, the previous messages are changed to Prodo as follows.

"Prodo came in." "Prodo came in." "Prodo has left." "Prodo came in."

Since the chat allows duplicate nicknames, there are currently two people in the chat who use the nickname, Prodo. Now, when Prodo (the second person) changes his nickname to Ryan, the chat message is changed as follows.

"Prodo came in." "Ryan came in." "Prodo has left." "Prodo came in."

Complete the function that returns the entire chat messages.
```

## Answer Format

```javascript
function solution(record) {
    var answer = [];
    return answer;
}
```

## Limitations

```text
Record is an array containing the following strings and its length is 1 ~ 100,000.

Here is a description of the string in the record.
- All users are separated by [user ID].
- [User ID] enters the chat with [Nickname] - "Enter [User ID] [Nickname]" (ex. "Enter uid1234 Muzi")
- [User ID] leaves the chat - "Leave [User ID]" (ex. "Leave uid1234")
- [User ID] changes nickname to [Nickname] - "Change [User ID] [Nickname]" (ex. "Change uid1234 Muzi")
- The first word is either Enter, Leave, or Change.
- Each word is separated by a space and consists of only uppercase letters, lowercase letters, and numbers.
- The user ID and nickname distinguish between uppercase and lowercase letters.
- The length of the user ID and nickname is 1 ~ 10.
- There is no wrong input such as an user who left the chat is changing their nickname.
```

## Input and output examples

```text
record:
["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

answer:
["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]
```
