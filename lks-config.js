/* Every address and setting that points at LKS lives in this file.
 * Change a value here and reload the lobby; nothing else needs editing.
 *
 *   mainUrl  the LKS website: Storm of Seth and Plinko are opened on it
 *   apiUrl   the LKS game service: the lobby calls CreateMember / CreateGameToken here for the six legacy slots
 *   partner  who this lobby is, as far as the LKS API is concerned
 *
 * DEMO ONLY: the partner key is visible to anyone who opens this page. A production lobby must sign
 * the LKS API calls on a server and never ship the key to the browser.
 */
window.LKS_CONFIG = {
  mainUrl: 'https://lk-slots-demo-602887045856.asia-east1.run.app',
  apiUrl: 'https://lk-legacy-demo-602887045856.asia-east1.run.app',
  partner: { sid: '886241001', skey: '0bb836751b0ea7a685bce0f6fd5f0456', account: 'river001', lang: 'zh-TW' },
};
