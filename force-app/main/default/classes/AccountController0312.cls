public with sharing class AccountController0312 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}