export function formatDate(inp_date) {
    return new Intl.DateTimeFormat("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(inp_date);
}
