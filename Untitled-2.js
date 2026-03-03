document.addEventListener("DOMContentLoaded", () => {

    // 🌙 Modo escuro automático
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.classList.add("dark");
    }

    // Sidebar ativa
    document.querySelectorAll(".sidebar button").forEach(btn=>{
        btn.addEventListener("click",()=>{
            document.querySelectorAll(".sidebar button")
            .forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Melhorar gráfico com gradiente
    const oldAtualizarDashboard = atualizarDashboard;
    atualizarDashboard = function(){

        oldAtualizarDashboard();

        const ctx = document.getElementById("grafico").getContext("2d");
        const gradientG = ctx.createLinearGradient(0,0,0,400);
        gradientG.addColorStop(0,"#6366f1");
        gradientG.addColorStop(1,"#4f46e5");

        const gradientD = ctx.createLinearGradient(0,0,0,400);
        gradientD.addColorStop(0,"#ef4444");
        gradientD.addColorStop(1,"#b91c1c");

        grafico.data.datasets[0].backgroundColor=[gradientG,gradientD];
        grafico.update();

        if(totalG-totalD >= 0){
    saldo.style.color = "green";
}else{
    saldo.style.color = "red";
}        
    }
});
