public with sharing class otameshiApex0311 {
    @AuraEnabled(cacheable=true)
    public static string otameshi(){

        String name = 'Katakana';


        try {

            return name;

            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}