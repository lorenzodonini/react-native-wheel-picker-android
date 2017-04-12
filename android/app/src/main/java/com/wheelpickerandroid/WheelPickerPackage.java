package com.wheelpickerandroid;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;
import java.util.Collections;

public class WheelPickerPackage implements ReactPackage {

    @Override public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        WheelPickerManager manager = new WheelPickerManager();
        return Arrays.<ViewManager>asList(manager);
    }

    @Override public List<NativeModule> createNativeModules( ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        return modules;
    }
}