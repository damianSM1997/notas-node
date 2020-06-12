const indexCtrl = {};
// aqui se renderisaran las cosas
// despues se mandan a llamar donde se requiera

indexCtrl.renderIndex = (req, res) => {
    res.render('index');
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about');
}

module.exports = indexCtrl;