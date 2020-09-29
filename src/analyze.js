export default function Analyze(doc) {
    let contentMetadataLang = {
        selectors: ["html", "lang"],
        data: "",
    };
    let contentMetadataDir = {
        selectors: ["html", "dir"],
        data: "",
    };
    doc.querySelectorAll("html").forEach(item => {
        contentMetadataLang.data = item.lang;
        contentMetadataDir.data = item.dir;
    });

    let contentMetadataTitle = {
        selectors: ["title"],
        data: "",
    };
    doc.querySelectorAll("title").forEach(item => {
        contentMetadataTitle.data = item.innerText;
    });

    let contentMetadataMeta = {
        selectors: ["meta"],
        data: [],
    };
    doc.querySelectorAll("meta").forEach(item => {
        let obj = {};
        if (item.attributes.name !== undefined && item.attributes.name.value !== "") {
            obj.name = item.attributes.name.value;
        }
        if (item.attributes.content !== undefined && item.attributes.content.value !== "") {
            obj.content = item.attributes.content.value;
        }
        if (item.attributes.property !== undefined && item.attributes.property.value !== "") {
            obj.property = item.attributes.property.value;
        }
        if (item.attributes.charset !== undefined && item.attributes.charset.value !== "") {
            obj.charset = item.attributes.charset.value;
        }
        contentMetadataMeta.data.push(obj);
    })

    let contentResourcesAnchors = {
        selectors: ["a"],
        data: [],
    };
    doc.querySelectorAll("a").forEach(item => {
        if (item.href !== "") {
            contentResourcesAnchors.data.push({
                href: item.href.replace(document.location.origin, ""),
                title: item.title
            });
        }
    });

    let contentResourcesImages = {
        selectors: ["img"],
        data: [],
    };
    doc.querySelectorAll("img").forEach(item => {
        contentResourcesImages.data.push({
            src: item.src.replace(document.location.origin, ""),
            alt: item.alt
        });
    });

    let contentResourcesScripts = {
        selectors: ["script"],
        data: [],
    };
    doc.querySelectorAll("script").forEach(item => {
        if (item.src !== "") {
            contentResourcesScripts.data.push({
                src: item.src.replace(document.location.origin, "")
            });
        }
    });

    let contentResourcesLinks = {
        selectors: ["link"],
        data: [],
    };
    doc.querySelectorAll("link").forEach(item => {
        contentResourcesLinks.data.push({
            href: item.href.replace(document.location.origin, ""),
            rel: item.rel
        });
    });

    let contentTablesAll = {
        selectors: ["table", "tr", "td"],
        data: []
    };
    doc.querySelectorAll("table").forEach(table => {
        let tableData = {
            caption: "",
            headers: [],
            rows: [],
        };
        table.querySelectorAll("caption").forEach(caption => {
            tableData.caption = caption.innerText;
        });
        table.querySelectorAll("thead").forEach(thead => {
            thead.querySelectorAll("th").forEach(th => {
                tableData.headers.push(th.innerText);
            });
        });
        table.querySelectorAll("tbody").forEach(tbody => {
            let trs = tbody.querySelectorAll("tr");
            // Vertical headers
            if (trs.length > 1 && trs[1].querySelectorAll("th").length > 0 && trs[1].querySelectorAll("td").length > 0) {
                let row = [];
                trs.forEach(tr => {
                    tr.querySelectorAll("th").forEach(th => {
                        tableData.headers.push(th.innerText);
                    });
                    tr.querySelectorAll("td").forEach(td => {
                        row.push(td.innerText);
                    });
                });
                if (row.length > 0) { // Adding check in case tr contains th
                    tableData.rows.push(row);
                }
            } else {
                tbody.querySelectorAll("th").forEach(th => {
                    tableData.headers.push(th.innerText);
                });
                trs.forEach(tr => {
                    let row = [];
                    tr.querySelectorAll("td").forEach(td => {
                        row.push(td.innerText);
                    });
                    if (row.length > 0) { // Adding check in case tr contains th
                        tableData.rows.push(row);
                    }
                });
            }
        });
        contentTablesAll.data.push(tableData);
    });

    let contentListsUnordered = {
        selectors: ["ul", "li"],
        data: [],
    };
    doc.querySelectorAll("ul").forEach(ul => {
        let objs = [];
        Array.from(ul.children).forEach(li => {
            objs.push({
                innerText: li.innerText
            });
        });
        contentListsUnordered.data.push(objs);
    });

    let contentListsOrdered = {
        selectors: ["ol", "li"],
        data: [],
    };
    doc.querySelectorAll("ol").forEach(ol => {
        let objs = [];
        Array.from(ol.children).forEach(li => {
            objs.push({
                innerText: li.innerText
            });
        });
        contentListsOrdered.data.push(objs);
    });

    let contentHeadingsH1 = {
        selectors: ["h1"],
        data: [],
    };
    doc.querySelectorAll("h1").forEach(item => {
        contentHeadingsH1.data.push({
            innerText: item.innerText
        });
    });

    let contentHeadingsH2 = {
        selectors: ["h2"],
        data: [],
    };
    doc.querySelectorAll("h2").forEach(item => {
        contentHeadingsH2.data.push({
            innerText: item.innerText
        });
    });

    let contentHeadingsH3 = {
        selectors: ["h3"],
        data: [],
    };
    doc.querySelectorAll("h3").forEach(item => {
        contentHeadingsH3.data.push({
            innerText: item.innerText
        });
    });

    let contentHeadingsH4 = {
        selectors: ["h4"],
        data: [],
    };
    doc.querySelectorAll("h4").forEach(item => {
        contentHeadingsH4.data.push({
            innerText: item.innerText
        });
    });

    let contentHeadingsH5 = {
        selectors: ["h5"],
        data: [],
    };
    doc.querySelectorAll("h5").forEach(item => {
        contentHeadingsH5.data.push({
            innerText: item.innerText
        });
    });

    let contentElementsArticles = {
        selectors: ["article"],
        data: [],
    };
    doc.querySelectorAll("article").forEach(item => {
        contentElementsArticles.data.push({
            innerText: item.innerText
        });
    })

    let contentElementsSections = {
        selectors: ["section"],
        data: [],
    };
    doc.querySelectorAll("section").forEach(item => {
        contentElementsSections.data.push({
            innerText: item.innerText
        });
    });

    let contentElementsParagraphs = {
        selectors: ["p"],
        data: [],
    };
    doc.querySelectorAll("p").forEach(item => {
        contentElementsParagraphs.data.push({
            innerText: item.innerText
        });
    });

    return {
        contentMetadataLang: contentMetadataLang,
        contentMetadataDir: contentMetadataDir,
        contentMetadataTitle: contentMetadataTitle,
        contentMetadataMeta: contentMetadataMeta,
        contentResourcesAnchors: contentResourcesAnchors,
        contentResourcesImages: contentResourcesImages,
        contentResourcesScripts: contentResourcesScripts,
        contentResourcesLinks: contentResourcesLinks,
        contentTablesAll: contentTablesAll,
        contentListsUnordered: contentListsUnordered,
        contentListsOrdered: contentListsOrdered,
        contentHeadingsH1: contentHeadingsH1,
        contentHeadingsH2: contentHeadingsH2,
        contentHeadingsH3: contentHeadingsH3,
        contentHeadingsH4: contentHeadingsH4,
        contentHeadingsH5: contentHeadingsH5,
        contentElementsArticles: contentElementsArticles,
        contentElementsSections: contentElementsSections,
        contentElementsParagraphs: contentElementsParagraphs,
    }
}