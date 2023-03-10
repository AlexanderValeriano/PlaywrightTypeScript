import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://devis.interiale.fr/");
  await page
    .getByRole("button", { name: "Tout accepter et continuer" })
    .click();
});
test.only("Devis interiale", async ({ page }) => {
  //   Je complete ma situation
  await page.getByText("Actif").click();
  await page
    .locator(
      'select[name="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_q1"]'
    )
    .selectOption("13F70");
  await page.getByRole("textbox", { name: "jj/mm/aaaa" }).fill("28/10/1983");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Salaire mensuel brut").fill("2000");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Primes et indemnités brut").fill("500");

  //   Je choisi ma date d'adhésion
  await page
    .locator(
      '[id="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_adhesionRia"]'
    )
    .getByText("Oui")
    .click();
  await page.waitForTimeout(1000);
  await page
    .locator(
      '[id="_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_diffDate"]'
    )
    .getByText("Oui")
    .click();
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Sélectionnez une date" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("cell", { name: "31" }).click();
  //   Je souhaite couvrir mes proches
  await page.waitForTimeout(2000);
  await page.locator("#couvrirConjointBloc").getByText("Oui").click();
  await page.waitForTimeout(2000);
  await page.type("#devisA7", "06061987");

  //   await page.getByRole('button', { name: 'Continuer mon devis →' }).click();
  //   await page.locator('label').filter({ hasText: 'Non' }).first().click();
  //   await page.getByText('Non').nth(3).click();
  //   await page.getByText('Renforcé').first().click();
  //   await page.getByText('Complet').nth(1).click();
  //   await page.getByText('Optimal').nth(2).click();
  //   await page.getByText('Optimal').nth(3).click();
  //   await page.getByRole('button', { name: 'Continuer mon devis →' }).click();
  //   await page.goto('https://devis.interiale.fr/web/interiale-tunnels/devis?p_p_id=interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_javax.portlet.action=%2Ftunnel_devis%2Fsecond_step_action&_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_mvcRenderCommandName=%2Ftunnel_devis%2Fthird_step_render&_interialeTunnelsDevisPortlet_INSTANCE_UtEHvNWyxarN_step=tdd3s&p_auth=f9gaopSk');
});
