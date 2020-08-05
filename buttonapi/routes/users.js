var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let dataArray = [
      {
        name: '13111316',
        description: 'A2758 A2759 A3600 A3611 A3781 GROMMET FISHEYE DISTRESSED ENAMEL.jpg',
        url: '13111316%20A2758%20A2759%20A3600%20A3611%20A3781%20GROMMET%20FISHEYE%20DISTRESSED%20ENAMEL.jpg'
      },
      {
        name: '18010301',
        description: 'HIRSON-R SD (20L).pdf',
        url: '18010301%20HIRSON-R%20SD%20(20L).pdf'
      },
      {
        name: '18010302',
        description: 'GABBY.pdf',
        url: '18010302%20GABBY.pdf'
      },
      {
        name: '18011001',
        description: 'KONA MD.pdf',
        url: '18011001%20KONA%20MD.pdf'
      },
      {
        name: '18011002',
        description: 'AGASSIZ SD.pdf',
        url: '18011002%20AGASSIZ%20SD.pdf'
      },
      {
        name: '18012401',
        description: 'LVBA003.pdf',
        url: '18012401%20LVBA003.pdf'
      },
      {
        name: '18012401',
        description: ' LVBA003.pdf',
        url: '18012401B%20LVBA003.pdf'
      },
      {
        name: '18012402',
        description: 'LVBA704.pdf',
        url: '18012402%20LVBA704.pdf'
      },
      {
        name: '18012403',
        description: 'ASST HADDAD ITEMS.pdf',
        url: '18012403%20ASST%20HADDAD%20ITEMS.pdf'
      },
      {
        name: '18012404',
        description: 'ASST HADDAD ITEMS.pdf',
        url: '18012404%20ASST%20HADDAD%20ITEMS.pdf'
      },
      {
        name: '18012405',
        description: 'ASST HADDAD ITEMS.pdf',
        url: '18012405%20ASST%20HADDAD%20ITEMS.pdf'
      },
      {
        name: '18012901',
        description: 'DIAMO SD.pdf',
        url: '18012901%20DIAMO%20SD.pdf'
      },
      {
        name: '18012902',
        description: 'BEVIN SD.pdf',
        url: '18012902%20BEVIN%20SD.pdf'
      },
      {
        name: '18012903',
        description: 'ZAZZA SD.pdf',
        url: '18012903%20ZAZZA%20SD.pdf'
      },
      {
        name: '18020201',
        description: 'ANO SD.pdf',
        url: '18020201%20ANO%20SD.pdf'
      },
      {
        name: '18020202',
        description: 'AHOJI SD & VELKY SD.pdf',
        url: '18020202%20AHOJI%20SD%20&%20VELKY%20SD.pdf'
      },
      {
        name: '18020203',
        description: 'SAFRAN SD (YC).pdf',
        url: '18020203%20SAFRAN%20SD%20(YC).pdf'
      },
      {
        name: '18020204',
        description: 'ZUZ SD (YC).pdf',
        url: '18020204%20ZUZ%20SD%20(YC).pdf'
      },
      {
        name: '18020501',
        description: 'JAYDEN.pdf',
        url: '18020501%20JAYDEN.pdf'
      },
      {
        name: '18020601',
        description: 'METAL LOGO ITEMS.pdf',
        url: '18020601%20METAL%20LOGO%20ITEMS.pdf'
      },
      {
        name: '18020602',
        description: 'VELKY SD.pdf',
        url: '18020602%20VELKY%20SD.pdf'
      },
      {
        name: '18020602',
        description: ' VELKY SD (24 & 32).pdf',
        url: '18020602L%20VELKY%20SD%20(24%20&%2032).pdf'
      },
      {
        name: '18020602',
        description: ' VELKY SD.pdf',
        url: '18020602W%20VELKY%20SD.pdf'
      },
      {
        name: '18021202',
        description: 'MURS16.pdf',
        url: '18021202%20MURS16.pdf'
      },
      {
        name: '18022002',
        description: 'GL COLORS (EB logo).pdf',
        url: '18022002%20GL%20COLORS%20(EB%20logo).pdf'
      },
      {
        name: '1802201 ',
        description: 'IRSON-R SD.pdf',
        url: '1802201%20HIRSON-R%20SD.pdf'
      },
      {
        name: '1802201B',
        description: 'GABBY.pdf',
        url: '1802201B%20GABBY.pdf'
      },
      {
        name: '1802201C',
        description: 'CARGO SD.pdf',
        url: '1802201C%20CARGO%20SD.pdf'
      },
      {
        name: '18022201',
        description: 'WALLS02.pdf',
        url: '18022201%20WALLS02.pdf'
      },
      {
        name: '18022803',
        description: 'BW048621 BW048651 RHINESTONE SPRAYED PEARL ABS.pdf',
        url: '18022803%20BW048621%20BW048651%20RHINESTONE%20SPRAYED%20PEARL%20ABS.pdf'
      },
      {
        name: '18022804',
        description: 'SQ219401 SQ219411 FLOWER HAIRCLIP BUCKLE.pdf',
        url: '18022804%20SQ219401%20SQ219411%20FLOWER%20HAIRCLIP%20BUCKLE.pdf'
      },
      {
        name: '18022806',
        description: 'POND - FAUX PEARL SELF SHANK.pdf',
        url: '18022806%20POND%20-%20FAUX%20PEARL%20SELF%20SHANK.pdf'
      },
      {
        name: '18031410',
        description: 'SQ230431 FLAT TABLE TOP TUNNEL SHANK.pdf',
        url: '18031410%20SQ230431%20FLAT%20TABLE%20TOP%20TUNNEL%20SHANK.pdf'
      },
      {
        name: '18031411',
        description: 'BW080901 CREST PIN WITH ENAMEL.pdf',
        url: '18031411%20BW080901%20CREST%20PIN%20WITH%20ENAMEL.pdf'
      },
      {
        name: '18031412',
        description: 'BW024752 NAVY WHITE 2 TONE.pdf',
        url: '18031412%20BW024752%20NAVY%20WHITE%202%20TONE.pdf'
      },
      {
        name: '18031413',
        description: 'BW048591 BW048601 BW048611 NAVY WHITE 2 TONE.pdf',
        url: '18031413%20BW048591%20BW048601%20BW048611%20NAVY%20WHITE%202%20TONE.pdf'
      },
      {
        name: '18031416',
        description: ' (20L) CAIRO LATIMER LONDON PORTSMOUTH STAMFORD.pdf',
        url: '18031416M%20(20L)%20CAIRO%20LATIMER%20LONDON%20PORTSMOUTH%20STAMFORD.pdf'
      },
      {
        name: '18031416',
        description: ' (20L) CAIRO LATIMER LONDON PORTSMOUTH STAMFORD.pdf',
        url: '18031416W%20(20L)%20CAIRO%20LATIMER%20LONDON%20PORTSMOUTH%20STAMFORD.pdf'
      },
      {
        name: '18031417',
        description: ' (24L) CAIRO DIGBY REEVES LANCASTER NEVLA OLLIE STAMFORD VIGO.pdf',
        url: '18031417M%20(24L)%20CAIRO%20DIGBY%20REEVES%20LANCASTER%20NEVLA%20OLLIE%20STAMFORD%20VIGO.pdf'
      },
      {
        name: '18031417',
        description: ' (24L) CAIRO DIGBY FINOLA REEVES LANCASTER NEVLA OLLIE STAMFORD VIGO.pdf',
        url: '18031417W%20(24L)%20CAIRO%20DIGBY%20FINOLA%20REEVES%20LANCASTER%20NEVLA%20OLLIE%20STAMFORD%20VIGO.pdf'
      },
      {
        name: '18031418',
        description: 'CAIRO DIGBY FINOLA REEVES LANCASTER NEVLA OLLIE VIGO.pdf',
        url: '18031418%20CAIRO%20DIGBY%20FINOLA%20REEVES%20LANCASTER%20NEVLA%20OLLIE%20VIGO.pdf'
      },
      {
        name: '18031419',
        description: 'BW085391 SNAFFLE.pdf',
        url: '18031419%20BW085391%20SNAFFLE.pdf'
      },
      {
        name: '18031420',
        description: 'BW085401 SNAFFLE.pdf',
        url: '18031420%20BW085401%20SNAFFLE.pdf'
      },
      {
        name: '18031421',
        description: 'BW085411 SNAFFLE.pdf',
        url: '18031421%20BW085411%20SNAFFLE.pdf'
      },
      {
        name: '18031422',
        description: 'BW085431 SNAFFLE.pdf',
        url: '18031422%20BW085431%20SNAFFLE.pdf'
      },
      {
        name: '18031423',
        description: 'RVT007 BAR RIVET.pdf',
        url: '18031423%20RVT007%20BAR%20RIVET.pdf'
      },
      {
        name: '18031425',
        description: 'BW016182 BW016181 NAVY WHITE 2 TONE.pdf',
        url: '18031425%20BW016182%20BW016181%20NAVY%20WHITE%202%20TONE.pdf'
      },
      {
        name: '18031426',
        description: 'BW048952 BW048942 BW048931 NAVY BLACK  WHITE 2 TONE.pdf',
        url: '18031426%20BW048952%20BW048942%20BW048931%20NAVY%20BLACK%20%20WHITE%202%20TONE.pdf'
      },
      {
        name: '18031424',
        description: 'STAMFORD (TORTOISE).pdf',
        url: '18031424%20STAMFORD%20(TORTOISE).pdf'
      },
      {
        name: '18031427',
        description: 'BW068491 BW068571 METAL BUTTON MATCHING BUCKLE.pdf',
        url: '18031427%20BW068491%20BW068571%20METAL%20BUTTON%20MATCHING%20BUCKLE.pdf'
      },
      {
        name: '18031428',
        description: 'BW065801 BW068581 METAL SHANK PYRAMID MATCHING BUCKLE.pdf',
        url: '18031428%20BW065801%20BW068581%20METAL%20SHANK%20PYRAMID%20MATCHING%20BUCKLE.pdf'
      },
      {
        name: '18031429',
        description: 'BW064691 WHTR018 WHTR020 WHTR021.pdf',
        url: '18031429%20BW064691%20WHTR018%20WHTR020%20WHTR021.pdf'
      },
      {
        name: '18031430',
        description: 'A4306 ABS 2 PC CREST.pdf',
        url: '18031430%20A4306%20ABS%202%20PC%20CREST.pdf'
      },
      {
        name: '18031431',
        description: 'BW068421 BW068431 BW071971 BW071981.pdf',
        url: '18031431%20BW068421%20BW068431%20BW071971%20BW071981.pdf'
      },
      {
        name: '18031431',
        description: 'BW068421 BW068431 BW071981 BW071971.pdf',
        url: '18031431%20BW068421%20BW068431%20BW071981%20BW071971.pdf'
      },
      {
        name: '18031431',
        description: '  BW068421 BW068431 BW071971 BW071981.pdf',
        url: '18031431L%20%20BW068421%20BW068431%20BW071971%20BW071981.pdf'
      },
      {
        name: '18031432',
        description: 'SQ229891 SNAFFLE.pdf',
        url: '18031432%20SQ229891%20SNAFFLE.pdf'
      },
      {
        name: '18031433',
        description: 'A3682X VACUMN PLATED.pdf',
        url: '18031433%20A3682X%20VACUMN%20PLATED.pdf'
      },
      {
        name: '18031434',
        description: 'SQ220231 SQ230421 SQ218461 SQ230311 SQ220311 SQ224801 BAMBOO.pdf',
        url: '18031434%20SQ220231%20SQ230421%20SQ218461%20SQ230311%20SQ220311%20SQ224801%20BAMBOO.pdf'
      },
      {
        name: '18031435',
        description: 'SQ225261 SQ225271 SQ226081 HAMMERED.pdf',
        url: '18031435%20SQ225261%20SQ225271%20SQ226081%20HAMMERED.pdf'
      },
      {
        name: '18031436',
        description: 'SQ224311 SQ224661 SQ224671 SQ226111 ZIPPER PULL METAL.pdf',
        url: '18031436%20SQ224311%20SQ224661%20SQ224671%20SQ226111%20ZIPPER%20PULL%20METAL.pdf'
      },
      {
        name: '18031437',
        description: 'SQ231721 SQ231341 FROGS.pdf',
        url: '18031437%20SQ231721%20SQ231341%20FROGS.pdf'
      },
      {
        name: '18031438',
        description: 'SQ230911 BLUE GROTTO FABRIC FLOWER.pdf',
        url: '18031438%20SQ230911%20BLUE%20GROTTO%20FABRIC%20FLOWER.pdf'
      },
      {
        name: '18031438',
        description: 'SQ230911 LILAC FRECSIA FABRIC FLOWER.pdf',
        url: '18031438%20SQ230911%20LILAC%20FRECSIA%20FABRIC%20FLOWER.pdf'
      },
      {
        name: '18031439',
        description: 'SQ228161 TASSLE ZIPPER PULL WITH BEADS.pdf',
        url: '18031439%20SQ228161%20TASSLE%20ZIPPER%20PULL%20WITH%20BEADS.pdf'
      },
      {
        name: '18031440',
        description: 'SQ227281 FEATHER AND TASSEL ZIPPER PULL.pdf',
        url: '18031440%20SQ227281%20FEATHER%20AND%20TASSEL%20ZIPPER%20PULL.pdf'
      },
      {
        name: '18031441',
        description: 'SQ200671 POLYESTER BUTTON.pdf',
        url: '18031441%20SQ200671%20POLYESTER%20BUTTON.pdf'
      },
      {
        name: '18031442',
        description: '3310 SD POLYESTER BUTTON.pdf',
        url: '18031442%203310%20SD%20POLYESTER%20BUTTON.pdf'
      },
      {
        name: '18031443',
        description: 'SQ051891 SQ128861 SQ122161 SQ122171 SQ080932 S03781  FAUX PEARL DYED TO MATCH.pdf',
        url: '18031443%20SQ051891%20SQ128861%20SQ122161%20SQ122171%20SQ080932%20S03781%20%20FAUX%20PEARL%20DYED%20TO%20MATCH.pdf'
      },
      {
        name: '18031444',
        description: 'A4363 ABS CREST SHANK.pdf',
        url: '18031444%20A4363%20ABS%20CREST%20SHANK.pdf'
      },
      {
        name: '18031445',
        description: 'A4362 ABS CREST SHANK.pdf',
        url: '18031445%20A4362%20ABS%20CREST%20SHANK.pdf'
      },
      {
        name: '18031445',
        description: ' A4362 ABS CREST SHANK.pdf',
        url: '18031445M%20A4362%20ABS%20CREST%20SHANK.pdf'
      },
      {
        name: '18031446',
        description: 'A4357 A4361 HAMMERED SHANK BUTTON.pdf',
        url: '18031446%20A4357%20A4361%20HAMMERED%20SHANK%20BUTTON.pdf'
      },
      {
        name: '18031447',
        description: 'A4358 A4359 A4360 LARGE OVAL SHAPE BUTTON.pdf',
        url: '18031447%20A4358%20A4359%20A4360%20LARGE%20OVAL%20SHAPE%20BUTTON.pdf'
      },
      {
        name: '18031448',
        description: 'A4356 LARGE OPEN GROMMET SHANK.pdf',
        url: '18031448%20A4356%20LARGE%20OPEN%20GROMMET%20SHANK.pdf'
      },
      {
        name: '18031449',
        description: 'A4355 NOVELTY SHANK BUTTON.pdf',
        url: '18031449%20A4355%20NOVELTY%20SHANK%20BUTTON.pdf'
      },
      {
        name: '18031450',
        description: 'A4364 LARGE OVAL SHANK.pdf',
        url: '18031450%20A4364%20LARGE%20OVAL%20SHANK.pdf'
      },
      {
        name: '18031451',
        description: 'BW070851 BW070861 FAUX PEARL DYED TO MATCH BUTTON.pdf',
        url: '18031451%20BW070851%20BW070861%20FAUX%20PEARL%20DYED%20TO%20MATCH%20BUTTON.pdf'
      },
      {
        name: '18031452',
        description: 'BW060801 BW060791.pdf',
        url: '18031452%20BW060801%20BW060791.pdf'
      },
      {
        name: '18031453',
        description: 'SQ071311.pdf',
        url: '18031453%20SQ071311.pdf'
      },
      {
        name: '18031454',
        description: 'BW066391 BW068461 BW048471 BW068481 BW068591.pdf',
        url: '18031454%20BW066391%20BW068461%20BW048471%20BW068481%20BW068591.pdf'
      },
      {
        name: '18031601',
        description: 'JMENO-R SD & MATEJ-R SD.pdf',
        url: '18031601%20JMENO-R%20SD%20&%20MATEJ-R%20SD.pdf'
      },
      {
        name: '18031601',
        description: 'MATEJ-R - side view.pdf',
        url: '18031601%20MATEJ-R%20-%20side%20view.pdf'
      },
      {
        name: '18031602',
        description: 'ZUZ SD (PU).pdf',
        url: '18031602%20ZUZ%20SD%20(PU).pdf'
      },
      {
        name: '18031603',
        description: 'MASO SD.pdf',
        url: '18031603%20MASO%20SD.pdf'
      },
      {
        name: '18040201',
        description: 'ANNICK.pdf',
        url: '18040201%20ANNICK.pdf'
      },
      {
        name: '18040301',
        description: 'ASST METALS.pdf',
        url: '18040301%20ASST%20METALS.pdf'
      },
      {
        name: '18040304',
        description: 'ASST METALS.pdf',
        url: '18040304%20ASST%20METALS.pdf'
      },
      {
        name: '18040401',
        description: 'VODA SD.pdf',
        url: '18040401%20VODA%20SD.pdf'
      },
      {
        name: '18040402',
        description: 'LEGGO SD TORO SD VIGO SD.pdf',
        url: '18040402%20LEGGO%20SD%20TORO%20SD%20VIGO%20SD.pdf'
      },
      {
        name: '18040403',
        description: 'AFFLIGE SD.pdf',
        url: '18040403%20AFFLIGE%20SD.pdf'
      },
      {
        name: '18040404',
        description: 'COUCHE SD.pdf',
        url: '18040404%20COUCHE%20SD.pdf'
      },
      {
        name: '18040404',
        description: ' COUCHE SD.pdf',
        url: '18040404B%20COUCHE%20SD.pdf'
      },
      {
        name: '18040405',
        description: 'SYR SD.pdf',
        url: '18040405%20SYR%20SD.pdf'
      },
      {
        name: '18040406',
        description: 'FOYER SD.pdf',
        url: '18040406%20FOYER%20SD.pdf'
      },
      {
        name: '18040407',
        description: 'KAVA SD.pdf',
        url: '18040407%20KAVA%20SD.pdf'
      },
      {
        name: '18040408',
        description: 'ZUTE SD.pdf',
        url: '18040408%20ZUTE%20SD.pdf'
      },
      {
        name: '18040409',
        description: 'U913X.pdf',
        url: '18040409%20U913X.pdf'
      },
      {
        name: '18040410',
        description: 'PAU SD (WY CLRS - 24L & 32L).pdf',
        url: '18040410%20PAU%20SD%20(WY%20CLRS%20-%2024L%20&%2032L).pdf'
      },
      {
        name: '18040901',
        description: 'LAPEL PINS.pdf',
        url: '18040901%20LAPEL%20PINS.pdf'
      },
      
    ]

    res.json({
      data: dataArray
    })
});

module.exports = router;
