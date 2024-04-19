<script>
    import {
        Dropdown,
        DropdownToggle,
        DropdownItem,
        DropdownMenu,
    } from "sveltestrap";

    let schedule = [
        { day: "Monday", hours: [] },
        { day: "Tuesday", hours: [] },
        { day: "Wednesday", hours: [] },
        { day: "Thursday", hours: [] },
        { day: "Friday", hours: [] },
        { day: "Saturday", hours: [] },
        { day: "Sunday", hours: [] },
    ];

    // Ajouter les 24 heures à chaque jour
    schedule.forEach((day) => {
        for (let i = 0; i < 24; i++) {
            const startTime = `${i}:00 AM`;
            const endTime = `${i + 1}:00 AM`;
            day.hours.push({ time: `${startTime} - ${endTime}`, event: "" });
        }
    });

    // Obtenir la liste des jours pour construire les axes
    let uniqueDays = schedule.map((entry) => entry.day);
</script>

<main>
    <h1>Schedules</h1>
    <div class="scrollable_box">
        <table>
            <thead>
                <tr>
                    <th style="background-color: transparent; border: none;">
                        <Dropdown autoClose="outside">
                            <DropdownToggle color="success" caret
                                >Outside</DropdownToggle
                            >
                            <DropdownMenu>
                                <DropdownItem>Démo 1</DropdownItem>
                                <DropdownItem>Démo 2</DropdownItem>
                                <DropdownItem>Démo 3</DropdownItem>
                            </DropdownMenu>
                        </Dropdown></th
                    >
                    {#each uniqueDays as day}<th style=" text-align: center;"
                            >{day}</th
                        >{/each}
                </tr>
            </thead>
            <tbody class="grid">
                {#each Array.from({ length: 24 }) as _, hour}
                    <tr>
                        <td style="text-align: center;">{hour + 1}:00 AM</td>
                        {#each schedule as { day, hours }}
                            <td>
                                {#if hours.find( (entry) => entry.time.includes(`${hour}:00 AM`), )}
                                    {hours.find((entry) =>
                                        entry.time.includes(`${hour}:00 AM`),
                                    ).event}
                                {/if}
                            </td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</main>

<style>
    main {
        margin: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    .scrollable_box {
        overflow: scroll;
        height: 100vh;
    }
    .scrollable_box::-webkit-scrollbar {
        width: 10px;
    }

    .scrollable_box::-webkit-scrollbar-track {
        background-color: inherit;
    }

    .scrollable_box::-webkit-scrollbar-thumb {
        background-color: #516e9842;
        border-radius: 5px;
    }

    .scrollable_box::-webkit-scrollbar-thumb:hover {
        background-color: #0838816a;
        border-radius: 5px;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
</style>
