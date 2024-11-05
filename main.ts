namespace SpriteKind {
    export const ShieldKind = SpriteKind.create()
    export const BrokenShiledKind = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    shoot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 5 5 b . . . . . . 
        . . . b b b 5 5 1 1 b b b . . . 
        . . . b 5 5 5 5 1 1 5 5 b . . . 
        . . . . b d 5 5 5 5 d b . . . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . c 5 d d d d 5 c . . . . 
        . . . . c 5 d c c d 5 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    shoot.setVelocity(50, 0)
    shoot.setPosition(mario.x, mario.y)
    shoot.setStayInScreen(false)
    shoot.setFlag(SpriteFlag.GhostThroughWalls, true)
    shoot.setFlag(SpriteFlag.DestroyOnWall, true)
})
function make_shield () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        shield = sprites.create(img`
            f f f f f a f f a a a a f f a f 
            f f f f f a a f a f f a a f a f 
            f a a a a f a f a f a a f a a f 
            f a f f a a f f f a f f f a f a 
            a a f f f a f f f a a f f f f a 
            a f f f f a f a f f a a f f f a 
            f a a a f a f a f f f f a a a a 
            f f f f f a f a a a a f f f f f 
            f f f f f a f a f f a f f f f f 
            f f f f a f f f a a a f f f f f 
            f f a a a f f f f f f a a a a f 
            a a a f a a a f f f a a f a a f 
            a f f a a f a f f f a f f a f f 
            f f f a a a a f f f a a f f f a 
            f f f f a a f f f f f a a a a a 
            f f a a a f f f f f f f f f f f 
            `, SpriteKind.ShieldKind)
        tiles.placeOnTile(shield, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -100
    }
})
function make_enemis () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        rabbit = sprites.create(img`
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
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        rabbit,
        [img`
            . . . . . . d . d . . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . 2 d 2 d d d d d . . . 
            . . . . d d d d d d d d d . . . 
            9 9 9 9 2 2 2 d d d d d d d . . 
            . 9 9 9 1 1 d d d d d d d d . . 
            9 9 9 9 d d d d d d d d d d . . 
            . . 9 . f f f f f f f f d d . . 
            . . 9 f d f d d d f d f d d d d 
            . . f d d f d d f d d f d d d d 
            . . f d f d d f d d d f d d d d 
            . . f d f f f f f f f . . . . . 
            `,img`
            . . . . . . d . d . . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . 2 d 2 d d d d . . . . 
            . . . . d d d d d d d d d . . . 
            . 9 9 9 9 2 2 d d d d d d . . . 
            . . 9 9 9 1 d d d d d d d d . . 
            . 9 9 9 9 d d d d d d d d d . . 
            . . . 9 f f f f f f f f d d . . 
            . . . 9 f d f d d d f f d d d d 
            . . . f d d f d d f d f d d d d 
            . . . f d f d d f d d f d d d d 
            . . . f d f f f f f f . . . . . 
            `,img`
            . . . . . . d . d . . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d 3 d 3 d . . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . 2 d 2 d d d d . . . . 
            . . . . d d d d d d d d d . . . 
            . 9 9 9 9 2 2 d d d d d d . . . 
            . . 9 9 9 1 d d d d d d d d . . 
            . 9 9 9 9 d d d d d d d d d . . 
            . . . 9 f f f f f f f f d d . . 
            . . . 9 f d f d d d f f d d d . 
            . . . f d d f d d f d f d d d . 
            . . . f d f d d f d d f d d d . 
            . . . f d f f f f f f . . . . . 
            `],
        500,
        true
        )
        tiles.placeOnTile(rabbit, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ShieldKind, function (sprite, otherSprite) {
    broken_shield = sprites.create(img`
        . . . . . . . a a . . . . . . f 
        . . . . . . f a f f . . . . f f 
        f f f f a f f f a a a f f f f f 
        f f a a a f f f f f f a a a a f 
        a a a f a a a f f f a a f a a f 
        a f f a a f a f f f a f f a f f 
        f f f a a a a f f f a a f f f a 
        f f f f a a f f f f f a a a a a 
        f f a a a f f f f f f f f f f f 
        `, SpriteKind.BrokenShiledKind)
    broken_shield.x = otherSprite.x
    broken_shield.y = otherSprite.y + 4
    tiles.setWallAt(otherSprite.tilemapLocation(), false)
    sprites.destroy(otherSprite)
    sprites.destroy(sprite, effects.halo, 500)
})
let broken_shield: Sprite = null
let rabbit: Sprite = null
let shield: Sprite = null
let shoot: Sprite = null
let mario: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999991111111199999999911199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999111111111119111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999991111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999911111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999991111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999991111119999999999999999999999999
    9999999999999999999999999999911111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111119999999999999999999999999
    9999999999999999999999991111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999911111111119999999999999999999999999
    9999999999999999999999111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999111111111111199999999999999999999999
    9999999999999999999111111111111111111111111111111111111111111111111111111111111199999999999999999999999999991111111999999911111111111111111999999999999999999999
    9999999999999999999111111111111111111111111111111111111111111111111111111111111119999999999999999999999999111111111111999911111111111111111199999999999999999999
    9999999999999999991111111111111111111111111111111111111111111111111111111111111111999999999999999999999911111111111111111111111111111111111199999999999999999999
    9999999999999999991111111111111111111111111111111111111111111111111111111111111111199999999999999999999911111111111111111111111111111111111199999999999999999999
    9999999999999999991111111111111111111111111111111111111111111111111111111111111111119999999999999999999111111111111111111111111111111111111199999999999999999999
    9999999999999999991111111111111111111111111111111111111111111111111111111111111111119999919999999999999111111111111111111111111111111111111199999999999999999999
    9999999999999999999111111111111111111111111111111111111111111111111111111111111111119999919999999999999111111111111111111111111111111111111199999999999999999999
    9999999999999999999911111111111111111111111111111111111111111111111111111111111111119999919222222222229111111111111111111111111111111111111999999999999999999999
    9999999999999999999991111111111111111111111111111111111111111111111111111111111111119999912222212222221111111111111111111111111111111111119999999999999999999999
    9999999999999999999999111111111111111111111111111111111111111111111111111111111111119999912222212212221111111111111111111111111111111111119999999999999999999999
    9999999999999999999999111111111111111111111111111111111111111111111111111111111111199999912222111111229111111111111111111111111111111111199999999999999999999999
    9999999999999999999999911111111111111111111111111111111111111111111111111111111111999999912221222221299911111111111111111111111111111119999999999999999999999999
    9999999999999999999999999999991111111111111111111111111111111111111111111111111119999999912222222221299911111111111111111111111111111199999999999999999999999999
    9999999999999999999999999999999111111111111111111111111111111111111111111111111199999999912222222222299991111111111111111111111111111999999999999999999999999999
    9999999999999999999999999999999911111111111111111111111111111111111111111111199999999999922222222222299999999991111111111111999911999999999999999999999999999999
    9999999999999999999999999999999999111111111111111111111111111111111111111119999999999999119999999222299999999999999999911999999999999999999999999999999999999999
    9999999999999999999999999999999999911111111111111111111111999999999999999999999999999999119999999999999999999999999999999999999999999999999777799999999999999999
    9999999999999999999999999999999999999911111111111111999999999999999999999999999999999999113999999999999999999999999999999999999999999999977777777799999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999131999999999999999999999999999999999999999999999777777777.79999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999991319999999999999999999999999999999999999999999777777777777.7999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933199999999999999999999999999999999999999999777777777777777799999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933999999999999999999999999999999999999999977777777777777777779999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933999999999999999999999999999999999999999777777777777777777777999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999933399999999999999999999999999999999999997777777777777777777777799999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999333399999999999999999999999999999999999977777777777777777777777779999999
    9999999999999977799999999999999999999999999999999999999999999999999999999999999999999999333339999999999999999999999999999999999977777777777777777777777777999999
    9999999999977799979999999999999999999999999999999999999999999999999999999999999999999999333339999999999999999999999999999999999977777777777777777777777777999999
    9999999997777799999999999999999999999999999999999999999999999999999999999999999999999999333339999999999999999999999999999999999997777777777777777777777777799999
    9999999997777777777777779999999999999999999999999999999999999999999999999999999999999999333333999999999999999999999999999999999999997777777777777777777777799999
    9999999977777777777777777999999999999999999999999999999999999999999999999999999999999993333333399999999999999999999999999999999999977777777777777777777777799999
    9999999777777777777777777779999999999999999999999999999999999999999999999999999999999993333333333999999999999999999999999999999997777777777777777777777777799999
    9999997777777777777777777777799999999999999999999999999999999999999999999999999999999933333333333339999999999999999999999999999777777777777777777777777777799999
    9999997777777777777777777777779999999999999999999999999999999999999999999999999999999333333333333333333999999999999999999999977777777777777777777777777777799999
    9999977777777777777777777777777999999999911999999999999999999999999999999999999999993333333333333333333339999999999999999999777777777777777777777777777777779999
    9999977777777777777777777777777799999999991199999999999999999999999999999999999999933333333333333333333333333333333999999997777777777777777777777777777777779999
    9999997777777777777777777777777777999999999199999999999999999999999999999999999999333333333333333333333333333333333999999997777777777777777777777777777777777999
    99999997777777777777777777777777777999999991993999999999999999999999999999999999993333333333333333333333333333333b3999999997777777777777777777777777777777777799
    999999997777777777777777777777777777999999919399999999999999999999999999999999999333333333333333333333333333333333b999999997777777777777777777777777777777777799
    999999999777777777777777777777777777799999919399999999999999999999999999999999993333333333333333333333333333333333b999999997777777777777777777777777777777777799
    99999999997777777777777777777777777779999991399999999999999999999999999999999993333333333333333333333333333333333bbb99999997777777777777777777777777777777777999
    99999999997777777777777777777777777777999991399999999999999999999999999999999933333333333333333333333333333333333bbb99999997777777777777777777777777777777779999
    9999999999777777777777777777777777777799999311999999999999999999999999999999333333333333333333333333333333333333bbbb99b99997777777777777777777777777777777779999
    999999999977777777777777777777777777779999933199999999999999999999999999933333333333333333333333333333333333333bbbbb933bb333777777777777777777777777777777799999
    99999999997777777777777777777777777779999993333399999999999999999999993333333333333333333333333333333333333333bbbbbb9999b333377777777777777777777777777777999999
    999999999777777777777777777777777777799999333333399999999999999999933333333333333333333333333333333333333333bbbbbbbbbbbbbb3333377777777e777777777777777779999999
    9999999977777777777777777777777777777999933333333339999999999999993333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbb333777777e77777777eee777e999999999
    9999999777777777777777777777777777777999333333333333333999999999993333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbb77777e777777eee77eeee99999999
    9999999777777777777777777777777777777993333333333333333399999999993333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeee777eeeeee99999999
    99999997777777777777777777777777777779333333333333333333399999999333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee99999999
    99999977777777777777777777777777777773333333333333333333339999999333333333333bbbb3333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeee9999999
    9999997777777777777777777777777777777333333333333333333333999999333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee9999999
    99999777777777777777777777777777777733333333333333333333339999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee9999999
    99997777777777777777777777777777777733333333333333333333339999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee9999999
    9997777777777777777777777777777777733333333333333bbbbb333b9999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeee9999999
    99977777777777777777777777777777777333333333bbbbbbbbbbbbbb999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeee9999999
    9997777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeee9999999
    999777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbb9999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeee9999999
    99777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee9999999
    9977777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee9999999
    99977777777777777777777777e777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeb999999
    99997777777777777777777777e7bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee999999
    99999777777777777777777eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee999999
    99999977777777777777777eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeee999999
    9999999777e777777777777eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeb99999
    999999997ee77777777777eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeb99999
    99999999eeeee777777eeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeebb9999
    99999999eeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeebbb999
    999999999eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebb999
    99999999eeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbb99
    99999999eeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbb99
    999999999eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbb99
    999999999eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbb9
    999999999eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbb9
    999999999eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbb9
    99999999eeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeebb9
    99999999eeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebb9
    99999999eeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeebb9
    99999999eeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeee9
    99999999eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeb
    99999999eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeee
    99999999eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeee
    9999999eeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeee
    9999999eeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeee
    9999999eeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeee
    999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeee
    999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeee
    99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeee
    99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeee
    9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeee
    9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeee
    999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeee
    99eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeee
    9eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
let mario_v = 100
mario = sprites.create(img`
    . . 2 2 2 2 2 . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 . . . . . . . 
    . d d d d 6 d . . . . . . . . . 
    . d d d d d d . . . . . . . . . 
    . d d d d 2 2 . . . . . . . . . 
    . . d d d d . . . . . . . . . . 
    . . 2 8 8 2 . . . 6 6 . . . . . 
    . . 8 d d d d d 6 6 6 . . . . . 
    . . 8 2 2 8 5 d 6 6 . . . . . . 
    . . 8 2 2 8 . . 6 6 6 . . . . . 
    . . 8 2 2 8 . . . 6 6 . . . . . 
    . . 8 8 8 8 . . . . . . . . . . 
    . . 8 8 8 8 8 . . . . . . . . . 
    . . 8 8 . 8 8 . . . . . . . . . 
    . . 8 8 . 8 8 . . . . . . . . . 
    . . e e . e e . . . . . . . . . 
    `, SpriteKind.Player)
let marios_turn = 1
mario.setStayInScreen(true)
scene.cameraFollowSprite(mario)
controller.moveSprite(mario, mario_v, 0)
mario.ay = 200
make_enemis()
make_shield()
game.onUpdateInterval(5000, function () {
    if (mario_v > 0) {
        mario_v = 0
    } else {
        mario_v = 100
    }
    controller.moveSprite(mario, mario_v, 0)
})
