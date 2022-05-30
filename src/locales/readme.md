# Global locales folder

This folder will not have any module prefixes and every string will be added to the root of the locales object

Example:

```bash
|- en.yaml
    |- some-key: some example text
|- ro.yaml
    |- some-key: niste text de examplu
```

You will have access to your keys from the root like `t('some-key')`
