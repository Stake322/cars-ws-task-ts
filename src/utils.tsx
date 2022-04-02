


export const toDate = (time: number) => {

    let date = new Date(time);
    let years = date.getFullYear()
    let mouth = (date.getMonth() + 1).toString()
    let days = date.getDate().toString()
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()
    mouth = ((Number(mouth) < 10) ? '0' + mouth : mouth);
    hours = (Number(hours) < 10) ? '0' + hours : hours;
    days = (Number(days) < 10) ? '0' + days : days;
    minutes = (Number(minutes) < 10) ? '0' + minutes : minutes;

    return (
        <>{days}.{mouth}.{years} {hours}: {minutes} </>
    )


}