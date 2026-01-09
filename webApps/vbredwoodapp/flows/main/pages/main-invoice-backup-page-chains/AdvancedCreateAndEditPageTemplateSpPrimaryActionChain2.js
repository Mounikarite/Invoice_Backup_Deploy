define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class AdvancedCreateAndEditPageTemplateSpPrimaryActionChain2 extends ActionChain {

    /**
     * @param {Object} context
     */
    async run(context) {
      const { $page, $flow, $application } = context;

      const callComponentMethodLoadDialogOpenResult = await Actions.callComponentMethod(context, {
        selector: '#loadDialog',
        method: 'open',
      });

      const callRestINVOICEFETCHFILEGetGLDITC0001PPMINVERPC10Result = await Actions.callRest(context, {
        endpoint: 'Databridge_Oracle_Invoice_Backup/getApiOracleTriggerInvoiceBackup',
        uriParams: {
          'P_INVOICE_FORMAT_CODE': 'Standard',
          'P_LE_BANK_ACCOUNT_ID': '300000047314450',
          'P_INVOICE_ID': $page.variables.AR_Invoice_Number?$page.variables.AR_Invoice_Number: $page.variables.ppmInvoicenumber,
        },
      });

      const callComponentMethodLoadDialogCloseResult = await Actions.callComponentMethod(context, {
        selector: '#loadDialog',
        method: 'close',
      });

      if (callRestINVOICEFETCHFILEGetGLDITC0001PPMINVERPC10Result.body.data.dm_doc_id != null) {

        $page.variables.PPM_INV_ERPC = callRestINVOICEFETCHFILEGetGLDITC0001PPMINVERPC10Result.body.data;
         const callComponentMethodMydialogOpenResult = await Actions.callComponentMethod(context, {
           selector: '#mydialog',
           method: 'open',
         });
      } else {
      }

    }
  }

  return AdvancedCreateAndEditPageTemplateSpPrimaryActionChain2;
});
