/**
 * @swagger
 * /kitaplar/{id}:
 *   get:
 *     summary: "Belirli bir kitabı getir"
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "Başarılı"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 isim:
 *                   type: string
 *                 yazar:
 *                   type: string
 *       404:
 *         description: "Kitap bulunamadı"
 */


/**
 * @swagger
 * /kitaplar:
 *   post:
 *     summary: "Yeni kitap ekle"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isim:
 *                 type: string
 *               yazar:
 *                 type: string
 *     responses:
 *       201:
 *         description: "Yeni kitap eklendi"
 */
