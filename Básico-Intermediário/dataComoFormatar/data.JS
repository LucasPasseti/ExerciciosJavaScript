const date = new Date();

const formatter = Intl.DateTimeFormat("pt-BR",{
    // dateStyle: "long",
    // timeStyle:"short", 
    weekday: "long",
    year:"numeric", 
    month: "long", 
    day:"numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
});

console.log(formatter.format(date))