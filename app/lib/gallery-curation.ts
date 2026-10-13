// B29 visual curation, 13 October 2026. Applies only to the Bespoke Joinery
// portfolio and its filtered results. See docs/gallery/b29-curation.json.
export const joineryGalleryOrder: readonly string[] = [
  "G08", "G27", "G19", "G32", "G44", "G29", "G47", "G31",
  "G09", "G56", "G43", "G61", "G48", "G33", "G57", "G63",
  "G20", "G45", "G14", "G38", "G30", "G64", "G35", "G39",
  "G41", "G49", "G51", "G70", "G73", "G77", "G58", "G25",
  "G59", "G69", "G34", "G50", "G65", "G60", "G37", "G72",
  "G62", "G42", "G79", "G82", "G80", "G90", "G91", "G86",
  "G87", "G78", "G84", "G93", "G81", "G99", "G106", "G16",
  "G02", "G15", "G11", "G12", "G75", "G36", "G52", "G67",
  "G54", "G76", "G71", "G55", "G74", "G04", "G17", "G83",
  "G85", "G108", "G89", "G92", "G94", "G88", "G66", "G68",
  "G97", "G98", "G07", "G03", "G13", "G100", "G101", "G96",
  "G107", "G104", "G105", "G95", "G103", "G102", "G06",
];

export const joineryGalleryRank = new Map(joineryGalleryOrder.map((id, index) => [id, index]));
