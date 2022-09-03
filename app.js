

document.querySelector("#cp").addEventListener('input', function () {
    if(this.value.length == 5){
        // let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`;

        let url =`https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=code,nom,region,population,surface,centre`

        fetch(url)
        .then(response => 
            response.json()
        .then((data) => {
            console.log(data)
            let affichage = '<ul>';
            for(let ville of data){
                affichage += `<li><strong>${ville.nom}</strong> - ${ville.population} habitants - ${ville.region.nom} - ${ville.surface} m²</li>`
            }
            affichage += '</ul>';
            document.querySelector("#villes").innerHTML = affichage;
        })
        ).catch(err => console.log('Erreur : + err'));
    }
});