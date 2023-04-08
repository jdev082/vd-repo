import { registerCommand } from "@vendetta/commands"
import { findByProps } from "@vendetta/metro"

const MessageActions = findByProps("sendMessage", "receiveMessage")

let commands = [
]

function getRandomFact() {
    fetch('https://api.jaydendev.repl.co/fact')
        .then(res => res.json())
        .then(data => {
            const { fact } = data[0];
            return fact;
        });
}

commands.push(registerCommand({
    name: "fact",
    displayName: "fact",
    description: "Sends a random fact.",
    displayDescription: "Sends a random fact.",
    // @ts-ignore
    applicationId: -1,
    inputType: 1,
    type: 1,

    execute: (args, ctx) => MessageActions.sendMessage(ctx.channel.id, {
        content: getRandomFact()
    })
}))