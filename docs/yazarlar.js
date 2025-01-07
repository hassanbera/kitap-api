/**
 * @swagger
 * /yazarlar:
 *   get:
 *     summary: "Tüm yazarları listele"
 *     responses:
 *       200:
 *         description: "Başarılı"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   isim:
 *                     type: string
 *                   kitap:
 *                     type: string
 */

/**
 * @swagger
 * /yazarlar/{id}:
 *   get:
 *     summary: "Belirli bir yazarı getir"
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
 *                 kitap:
 *                   type: string
 *       404:
 *         description: "Yazar bulunamadı"
 */

/**
 * @swagger
 * /yazarlar:
 *   post:
 *     summary: "Yeni yazar ekle"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isim:
 *                 type: string
 *               kitap:
 *                 type: string
 *     responses:
 *       201:
 *         description: "Yeni yazar eklendi"
 *       400:
 *         description: "Eksik bilgi hatası"
 */
