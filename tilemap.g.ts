// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`100010000909090909090909090909090909090909060404040404040404040404070909090206040404040404040404070209090902020808080808080808080202090909020504040404040404070802020909090504040404040404070208020209090909090909090909090202080202090909090909090906040403020801010909090909090909020604040308020209090909090909090202080808080a0a0909090909090909020208080808020209090909090909090202080808080202090909090909090902020808080802020909090909090909020504040404030209090909090909090504040404040403090909090909090909090909090909090909`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . 2 2 2 2 2 2 2 2 2 . . 2 2 
2 . . . . . . . . . . 2 . . 2 2 
2 . . . . . . . . . . 2 . . 2 2 
2 2 2 2 2 2 2 2 2 . . 2 . . 2 2 
2 2 2 2 2 2 . . . . . 2 . . 2 2 
2 2 2 2 2 2 . . . . . 2 . . 2 2 
2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 
2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 
2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 
2 2 2 2 2 2 . . 2 2 2 2 . . 2 2 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 2 2 . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.skillmap.islandTile4,sprites.castle.saplingOak,myTiles.tile2], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000070707070707070707070707070707070707070503030302070707070707070707070701050302040303030303030207070707010108040303030303030201070705030601080808080808080801010707010503060805030303030208010107070101080808010503030201080101070701040303030601070701010809090707040303030303060707010108010107070707070707070707070101080a0a07070503030303030303030601080101070701050303030303030303060801010707010108080808080808080808010107070104030303030303030303030601070704030303030303030303030303060707070707070707070707070707070707`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . . . 2 
2 2 2 . . 2 . . . . . . . . . 2 
2 . . . . 2 2 2 2 2 2 2 2 . . 2 
2 . . . . 2 . . . . . . 2 . . 2 
2 . . 2 2 2 . . . . . . 2 . . 2 
2 . . . . . . . 2 2 . . 2 . . 2 
2 . . . . . . . 2 2 . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn2,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn3,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.castle.saplingOak,sprites.skillmap.islandTile4,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "målstreg":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
