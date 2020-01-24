
export class Format
{
    static getCamelCase(text)
    {
        let div = document.createElement("div");

        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }
    static toTime(duration)
    {
        let seconds = parseInt((duration / 1000) % 60); // Zerando os segundos ao atingir 60s
        let minutes = parseInt((duration / (1000 * 60)) % 60); // Zerando os minutos aot atingir 60m
        let hours = parseInt((duration / (1000 * 3600)) % 24); // Zerando as horas ao atingir 24h
        
        if (hours > 0)
        {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        else {
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    static dateToTime(date, locale = 'pt-BR')
    {
        return date.toLocaleTimeString(locale, {

            hour: '2-digit',
            minute: '2-digit'

        });
    }

    static timeStampToTime(timeStamp)
    {
        return (timeStamp && typeof timeStamp.toDate === 'function') ? 
        Format.dateToTime(timeStamp.toDate()) : "";

    }
}