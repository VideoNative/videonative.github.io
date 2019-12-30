---
id: vn-interface
title: VNDesktop 接口文档
---

## LoadVideoNativeDll.h

### void VN_InitViewsContentClient(int argc, const char** argv, void (*pMain)(), void *app_delegate);   

### void VN_InitHybridViewsContentClient(int argc, const char** argv, void (*pMain)());   


### bool VN_GetQVNVideoNative(IQVNVideoNative **pQVNVideoNative);   
This function should be called on the main application thread when the application start.    
It will initialize and return a global IQVNVideoNative instance object,    
and use this global instance to load and close VideoNative page and app.   

```groovy
#include "LoadVideoNativeDll.h"
#pragma comment(lib, "VideoNative.lib")

CComPtr<IQVNVideoNative> vn;
VN_GetQVNVideoNative(&vn);
```

### void VN_SetDefaultPictureCacheDirectory(LPCWSTR directory);   

### void VN_InitPictureDataManager(LPCWSTR sqliteDBPath, LPCWSTR tableName);   

### void VN_SetCookieFilePath(const char *cookieFilePath); // utf8 coding   

### void VN_InitVNStorage(const char *sqliteDBPath, const char* storageTable); // utf8 coding   

### bool VN_CreateDataBuffer(IDataBuffer** ppBuffer);   
 
### void VN_SetExternalDataFetcher(const char* key, ExternalDataCallback callback); // utf8 coding   

### BOOL VN_GetExternalManager(IVNExternalManager** pExternalManager);   

---

### IQVNVideoNative.h

---

### IQVNApp.h

---

### IQVNPage.h

---
