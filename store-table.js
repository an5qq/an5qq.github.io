class StoreTable extends HTMLElement {
    connectedCallback() {
        const stores = JSON.parse(this.getAttribute("stores"));

        let html = `<table style="
            width:100%;
            border-collapse:collapse;
            background:#fff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 2px 6px rgba(0,0,0,0.1);
        ">`;

        stores.forEach(store => {
            html += `
                <tr>
                    <td style="
                        padding:12px 14px;
                        border-bottom:1px solid #ffe0c2;
                        background:#fffdf9;
                        font-weight:bold;
                        color:#444;
                        font-family:'Noto Sans JP','Yu Gothic',sans-serif;
                    ">
                        ${store}
                    </td>
                </tr>
            `;
        });

        html += `</table>`;
        this.innerHTML = html;
    }
}

customElements.define("store-table", StoreTable);
